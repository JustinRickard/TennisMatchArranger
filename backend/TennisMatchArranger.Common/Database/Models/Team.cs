using System;
using System.Collections.Generic;
using System.Text;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Team
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Club Club { get; set; }
        public Guid ClubId { get; set; }
    }
}
