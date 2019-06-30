using System;
using System.Collections.Generic;
using System.Text;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Invitation
    {
        public Guid Id { get; set; }

        public Guid MatchId { get; set; }
        public Match Match { get; set; }

        public Guid PlayerId { get; set; }
        public Player Player { get; set; }

        public bool? CanPlay { get; set; }
        public string ResponseMessage { get; set; }
    }
}
