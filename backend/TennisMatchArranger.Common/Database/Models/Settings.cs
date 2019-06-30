using System;
using System.Collections.Generic;
using System.Text;
using TennisMatchArranger.Common.Enums;

namespace TennisMatchArranger.Common.Database.Models
{
    public class Settings
    {
        public FrequencyUnit ReminderFrequencyUnit { get; set; }
        public int ReminderFrequencyValue { get; set; }

        public FrequencyUnit ScheduleFrequencyUnit { get; set; }
        public int ScheduleFrequencyValue { get; set; }

        public Player Player { get; set; }
        public Guid? PlayerId { get; set; }

        public Club Club { get; set; }
        public Guid? ClubId { get; set; }        
    }
}
