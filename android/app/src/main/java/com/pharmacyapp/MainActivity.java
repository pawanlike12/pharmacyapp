package com.pharmacyapp;
import org.devio.rn.splashscreen.SplashScreen; // here
// import com.cboy.rn.splashscreen.SplashScreen; // here
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  //  @Override
  //   protected void onCreate(Bundle savedInstanceState) {
  //       SplashScreen.show(this);  // here
  //       super.onCreate(savedInstanceState);
  //   }

  @Override
  protected String getMainComponentName() {
    return "pharmacyapp";
  }
}
