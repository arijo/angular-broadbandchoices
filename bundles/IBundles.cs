using System;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace BroadbandChoices {

    [ServiceContract]
    public interface IBundles {

      [OperationContract]
      string GetBundles(string id);

  }

}

