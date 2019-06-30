using System;
using System.Collections.Generic;
using System.Text;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Club
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Address Address { get; set; }
        public Guid AddressId { get; set; }

        public Settings Settings { get; set; }
        public Guid SettingsId { get; set; }
    }
}
