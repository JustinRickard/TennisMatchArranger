using System;
using System.Collections.Generic;
using System.Text;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Match
    {
        public Guid Id { get; set; }

        public Guid EventId { get; set; }
        public Event Event { get; set; }

        public Guid HomeTeamId { get; set; }
        public Team HomeTeam { get; set; }

        public Guid AwayTeamId { get; set; }
        public Team AwayTeam { get; set; }

        public DateTime? MatchStartTimeUtc { get; set; }
        public bool TimeConfirmed { get; set; }

        public string Notes { get; set; }
        public bool LocationDifferentFromClubAddress { get; set; }

        public DateTime? MeetingTimeUtc { get; set; }
        public string MeetingLocation { get; set; }

        public List<MatchPlayer> ConfirmedPlayers { get; set; }
    }
}
