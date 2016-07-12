using System.Collections.Generic;

namespace WebFTP.Models
{
    //Class created for simplification of gethering data needed
    //for angular application in pne object for further serialisation
    //to json format and sending to the client side.
    public class PathInfo
    {
        public PathInfo()
        {
            Less10 = 0;
            Less50 = 0;
            Less100 = 0;
            More100 = 0;
            folders = new List<string>();
            files = new List<string>();
        }
        public int Less10;
        public int Less50;
        public int Less100;
        public int More100;
        public string currentPath;
        public List<string> folders;
        public List<string> files;
    }
}
