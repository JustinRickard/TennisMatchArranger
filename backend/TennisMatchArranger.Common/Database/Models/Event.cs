using System;
using System.Collections.Generic;
using System.Text;
using TennisMatchArranger.Common.Enums;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public GenderType Gender { get; set; }
    }
}
