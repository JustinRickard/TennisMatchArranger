using System;
using System.Collections.Generic;
using System.Text;
using TennisMatchArranger.Common.Enums;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Player
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public GenderType Gender { get; set; }
        public DateTime DateOfBirth { get; set; }

        // Assumes a player is a member of 1 club
        public Club Club { get; set; }
        public Guid ClubId { get; set; }
        
        // Players could play for many teams in order to fill in, this would be their most common / best team
        public Team PrimaryTeam { get; set; }
        public Guid PrimaryTeamId { get; set; }

        public Settings Settings { get; set; }
        public Guid SettingsId { get; set; }
    }
}
