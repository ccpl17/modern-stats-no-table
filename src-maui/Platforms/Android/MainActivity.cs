﻿using Android.App;
using Android.Content.PM;

namespace StatCritValueCalculator;

[Activity(Theme = "@style/Maui.MainTheme.NoActionBar", MainLauncher = true,
  ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation | ConfigChanges.UiMode |
                         ConfigChanges.ScreenLayout | ConfigChanges.SmallestScreenSize | ConfigChanges.Density)]
public class MainActivity : MauiAppCompatActivity
{
}
