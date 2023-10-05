using System.Text.Json;

namespace StatCritValueCalculator;

public partial class MainPage
{
  public MainPage()
  {
    InitializeComponent();
  }

  private async void CheckForUpdate(object sender, EventArgs e)
  {
    const string currentVersion = "23.10.0";
    const string endpointUrl = "https://gist.githubusercontent.com/ccpl17/0330e04f234b987104345bebd510695d/raw/";

    try
    {
      var client = new HttpClient();
      var response = await client.GetAsync(endpointUrl);

      var jsonContent = response.IsSuccessStatusCode ? await response.Content.ReadAsStringAsync() : null;
      var data = jsonContent != null ? JsonSerializer.Deserialize<Dictionary<string, string>>(jsonContent) : null;
      var remoteVersion = data != null
        ? data.TryGetValue("version", out var versionValue) ? versionValue : currentVersion
        : currentVersion;

      var updateNow = Version.Parse(currentVersion) < Version.Parse(remoteVersion)
        ? await DisplayAlert("有可用的更新", "你想要現在下載嗎", "好 ", "取消")
        : false;

      if (updateNow)
      {
        var uri = new Uri("https://github.com/ccpl17/stat-crit-value-calculator/releases");
        await Browser.Default.OpenAsync(uri, BrowserLaunchMode.External);
      }
    }
    catch
    {
    }
  }
}
