// Place fonts/icomoon.ttf in your fonts/ directory and
// add the following to your pubspec.yaml
// flutter:
//   fonts:
//    - family: icomoon
//      fonts:
//       - asset: fonts/icomoon.ttf
import 'package:flutter/widgets.dart';

class Icomoon {
  Icomoon._();

  static const String _fontFamily = 'icomoon';

  static const IconData add = IconData(0xe900, fontFamily: _fontFamily);
  static const IconData eye = IconData(0xe901, fontFamily: _fontFamily);
  static const IconData heart = IconData(0xe902, fontFamily: _fontFamily);
  static const IconData left = IconData(0xe903, fontFamily: _fontFamily);
  static const IconData rate = IconData(0xe904, fontFamily: _fontFamily);
  static const IconData right = IconData(0xe905, fontFamily: _fontFamily);
  static const IconData shap = IconData(0xe906, fontFamily: _fontFamily);
}
