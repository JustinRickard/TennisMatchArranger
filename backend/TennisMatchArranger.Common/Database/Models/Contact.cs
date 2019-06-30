using System;
using System.Collections.Generic;
using System.Text;
using TennisMatchArranger.Common.Enums;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Contact
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ContactType ContactType { get; set; }
        public string Value { get; set; }
    }
}
