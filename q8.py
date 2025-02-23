# Primary Database writes first
primary_db.write(data)
# Secondary Database replication happens after an acknowledgment
secondary_db.queue(data)
