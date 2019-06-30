using System;
using System.Collections.Generic;
using System.Text;

namespace TennisMatchArranger.Common.Database.Models
{
    public class MatchPlayer
    {
        public Guid Id { get; set; }

        public Guid MatchId { get; set; }
        public Match Match { get; set; }

        public Guid PlayerId { get; set; }
        public Player Player { get; set; }
    }
}
