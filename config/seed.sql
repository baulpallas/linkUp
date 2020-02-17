use qk0it2sq8unsr7rl; 

insert into creator (email, password, nickname) values 
  ('paul@gmail.com', '1234', 'paul'),
  ('russo@gmail.com', '5678', 'russo');

insert into event (name, partysize, creatorid) values
 ('thursday fun', 5, 1),
  ('friday fun', 3, 1),
  

insert into preferences (eventid, zipcode, priceid, availability) values
  ('learn REST', 1),
  ('build our own ORM', 1),
  ('discuss MVC for structuring our apps', 1),
  ('deploy our app to heroku', 1),
  ('clean out desk', 2),
  ('say bye', 2),
  ('work out', 3);