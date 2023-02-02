import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/material.dart';
import "dart:io";
import "package:image_picker/image_picker.dart";
import "package:http/http.dart" as http;
import "dart:convert";

import 'package:modal_progress_hud_nsn/modal_progress_hud_nsn.dart';

class WorkingPage extends StatefulWidget {
  const WorkingPage({Key key}) : super(key: key);

  @override
  State<WorkingPage> createState() => _WorkingPageState();
}

class _WorkingPageState extends State<WorkingPage> {
  File _image;
  // final _picker = ImagePicker();
  bool showSpinner = false;
  bool isVisible = false;
  bool isVisible2 = true;
  var condition = "None", confidence = "None", percent = "";
  Future UploadImage(source) async {
    var image;
    var pickedFile;
    if (source == "gallery")
      pickedFile = await ImagePicker().getImage(source: ImageSource.gallery);
    else
      pickedFile = await ImagePicker().getImage(source: ImageSource.camera);

    if (pickedFile != null) {
      _image = File(pickedFile.path);
    } else {
      print("no image selected");
    }
    setState(() {
      showSpinner = false;
    });
    // print("hello");
    var stream = new http.ByteStream(_image.openRead());
    stream.cast();
    print("HEOOOOOOOOOOOO");
    var length = await _image.length();
    var uri = Uri.parse("http://192.168.85.178:8000/prediction");
    var request = new http.MultipartRequest("POST", uri);
    print("bye");
    // request.fields["title"] = "static title";

    // print("req made");
    // var multiport = http.MultipartFile("file", stream, length);
    // request.files.add(multiport);
    // print("i am here");
    // var response = await request.send();
    // print("byyyyyyy");
    // print(response);
    // if (response.statusCode == 200) {
    //   print("image uploaded!!!!!!!!!!!!!!!!!!");
    //   print(response.reasonPhrase);
    //   setState(() {
    //     showSpinner = false;
    //   });
    // } else {
    //   print("failed");
    setState(() {
      showSpinner = true;
      isVisible = false;
      isVisible2 = true;
    });
    request.files
        .add(await http.MultipartFile.fromPath("file", pickedFile.path));
    // var res = await request.send();
    http.Response res = await http.Response.fromStream(await request.send());
    if (res.statusCode == 200) {
      print("image uploaded");
      final respStr = (json.decode(res.body) as Map<String, dynamic>);
      print(respStr);
      setState(() {
        condition = respStr["class"];
        confidence = respStr["confidence"].toString();
        percent = "%";
      });
    } else {
      print("failed");
    }

    // var request = http.MultipartRequest(
    //     'POST', Uri.parse("http://192.168.0.107:8000/prediction"));
    // request.files.add(http.MultipartFile.fromBytes(
    //     'file', File(image).readAsBytesSync(),
    //     filename: 'tomato_leaf'));
    // var res = await request.send();
    // print(res.statusCode);
    // print("making in");
    // var response = await http.get(Uri.parse("http://192.168.0.107:8000/tick"));
    // print(response);
    // print("making out");
    // setState(() {
    //   _image = image;
    // });
    setState(() {
      showSpinner = false;
      isVisible = true;
      isVisible2 = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ModalProgressHUD(
      inAsyncCall: showSpinner,
      child: Scaffold(
          backgroundColor: Colors.yellowAccent,
          appBar: AppBar(
              backgroundColor: Colors.green[900],
              title: Text("Tomato Blight Detector")),
          body: Column(
            children: <Widget>[
              SizedBox(
                height: 40,
              ),
              Container(
                child: Text("Picture Upload Section",
                    style: TextStyle(fontSize: 20)),
                //margin: const EdgeInsets.all(10.0),
                padding: const EdgeInsets.all(10.0),
                decoration:
                    BoxDecoration(border: Border.all(color: Colors.brown)),
              ),
              SizedBox(
                height: 10,
              ),
              Container(
                height: 300,
                width: 300,
                color: Colors.lightGreenAccent,
                child: _image == null
                    ? Center(child: Text("Upload Picture of a Tomato leaf"))
                    : Image.file(File(_image.path).absolute),
              ),
              SizedBox(
                height: 45,
              ),
              Visibility(
                visible: isVisible2,
                child: Container(
                  padding: const EdgeInsets.all(10.0),
                  decoration:
                      BoxDecoration(border: Border.all(color: Colors.brown)),
                  child: Text("Response Field",
                      style: TextStyle(
                          fontSize: 25,
                          //fontWeight: FontWeight.bold,
                          color: Colors.brown[900])),
                ),
              ),
              Visibility(
                visible: isVisible,
                child: AnimatedOpacity(
                  opacity: isVisible ? 1.0 : 0.0,
                  duration: Duration(milliseconds: 500),
                  child: Container(
                    padding: const EdgeInsets.all(10.0),
                    decoration:
                        BoxDecoration(border: Border.all(color: Colors.brown)),
                    child: Text("Condition: $condition",
                        style: TextStyle(
                            fontSize: 25,
                            // fontWeight: FontWeight.bold,
                            color: Colors.brown[900])),
                  ),
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Visibility(
                visible: isVisible,
                child: AnimatedOpacity(
                  opacity: isVisible ? 1.0 : 0.0,
                  duration: Duration(milliseconds: 500),
                  child: Container(
                    padding: const EdgeInsets.all(10.0),
                    decoration:
                        BoxDecoration(border: Border.all(color: Colors.brown)),
                    child: Text("confidence: $confidence $percent",
                        style: TextStyle(
                          fontSize: 25,
                          // fontWeight: FontWeight.bold,
                          color: Colors.brown[900],
                        )),
                  ),
                ),
              ),
              SizedBox(
                height: 40,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  FloatingActionButton(
                    onPressed: () {
                      UploadImage("gallery");
                    },
                    backgroundColor: Colors.brown,
                    child: Icon(Icons.photo_library),
                  ),
                  FloatingActionButton(
                    onPressed: () {
                      UploadImage("camera");
                    },
                    backgroundColor: Colors.blueGrey,
                    child: Icon(Icons.camera),
                  )
                ],
              )
            ],
          )),
    );
  }
}
