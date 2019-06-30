using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using TennisMatchArranger.Common.Database.Models;

namespace TennisMatchArranger.Common.Database
{
    public class CoreContext : DbContext
    {
        public DbSet<Club> Clubs { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Invitation> Invitations { get; set; }
        public DbSet<Match> Matches { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Settings> Settings { get; set; }
        public DbSet<Team> Teams { get; set; }
    }
}
