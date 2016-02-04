using System;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Web;
using System.Net;
using System.IO;
using System.Linq;
using System.Json;

namespace BroadbandChoices {

  [ServiceBehavior(AddressFilterMode = AddressFilterMode.Any)]
  public class Bundles : IBundles {

    #region IAlbumService Members
    [WebInvoke(Method = "GET", UriTemplate = "GetBundles?id={id}", ResponseFormat = WebMessageFormat.Json)]
    public string GetBundles(string id) {

            var protocol = "http://";
            var hostname = "api.broadbandchoices.co.uk/api/v2/bestbuys";
            var auth = "?Authorization=eb45afb3-a7c2-4d6d-a62a-bb9a29a4fb2e";

            var url = new Uri(protocol + hostname + auth);
            WebRequest request = WebRequest.Create (url);

            request.ContentType = "application/json; charset=utf-8";
            HttpWebResponse response = (HttpWebResponse)request.GetResponse ();

            Stream dataStream = response.GetResponseStream ();
            StreamReader reader = new StreamReader (dataStream);
            string responseFromServer = reader.ReadToEnd ();

            reader.Close ();
            dataStream.Close ();
            response.Close ();

            return responseFromServer;
    }
    #endregion
  }
}

