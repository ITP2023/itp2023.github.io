---
layout: docs
prev:
  text: "Introduction"
  link: "/getting-getx/"
next:
  text: "TBA"
  link: "/getting-getx/tba"
---

# What is GetX?

To put it simply, GetX is a library that does three things.

* State Management
* Route Management
* Dependency Injection

_Dependency Injection_ is a mere fancy term for something we will discuss in it's own section.

Those coming from an RxDart or any Rx library will find the library intuitive and rightly so, since the library actually uses RxDart.



## Usage

The library exposes its classes and apis in...

```dart
import 'package:get/get.dart';
```

Furthermore, to actually use GetX inside components, you'll have to wrap your **entire app** inside the `GetMaterialApp` class like...

```dart{4-7}
...
void main() {
  runApp(
    GetMaterialApp(
      initialRoute: "/",
      routes: routes
    )
  );
}

```

Your routes is actually a map that maps strings to their corresponding components like..

```dart

Map<String, WidgetBuilder> routes = {
  "/": (context) => MainScreen()
}
```

`initialRoute` is understandably the first page your app displays upon start.


You should be good to use GetX inside of components as described further.


## Keep view and it's logic seperate

GetX says that Views and View logic should be written in different places. For controlling logic, we have controllers. They can be created by extending the `GetxController` class.

```dart{2}
...
class MyController extends GetxController {
  ...
}
```

To create a counter app, we identify that the count represents the state of the app and any changes to it should reflect in the UI. Thus, the UI must actually **observe** the variable.

Let's create a count variable.

```dart{3}
...
class MyController extends GetxController {
  var count = 0.obs;
  ...
}
```

You may notice the `.obs` and wonder if this is actually valid code. We worry not, since surprisingly, Dart's compiler is smart enough to figure this out on it's own. Truly a mystery.

More important is to note:

* `count` is a public variable on the class `MyController`. Keep this in mind.
* The type of `count` is actually `RxInt` and that the underlying `int` type can be accessed by `count.value`
* `.obs` ensures that GetX updates any view that uses this variable (by using the controller of course) everytime this variable is updated.

## Using the Controller

How do we actually use this Controller? Simple. By _Injecting_ it (not in the way you think).


GetX provides a class called `Obx` to use the **observable** values. It's actually a `Widget`, so you can just use it wherever in your layout like so..

```dart
...
import 'package:get/get.dart';
...

class MainScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ...
      Obx(
        () =>
          // Your layout that uses the controller
      )
      ...
    ;
  }
}
```

Now just bring your controller in here.


```dart
...
import 'package:get/get.dart';
...


class MainScreen extends StatelessWidget {

  final _controller = Get.put(MyController());

  @override
  Widget build(BuildContext context) {
    return ...
      Obx(() =>
          ...
      )
      ...
    ;
  }
}
```


you can get `count` by

```dart
...
Obx(() =>
  ...
  _controller.count.value
  ...
)
...
```


and set it by

```dart
Obx(() =>
  ...
  _controller.count(_controller.count.value + 1);
  ...
)
```

::: warning
You can use the controller's observables **only in the `Obx` builder function**
:::