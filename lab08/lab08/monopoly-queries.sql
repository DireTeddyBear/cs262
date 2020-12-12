
-- part 1
-- a: all games, recent first
SELECT *
	FROM "public"."game"
    ORDER BY time DESC;
	
-- b: all in last week
SELECT *
	FROM Game
	WHERE time >= CURRENT_DATE - 7
;

-- c: NON-null names
SELECT *
	FROM "public"."player"
    WHERE name is not null;
	
-- d: scores over 2k
SELECT playerid FROM "public"."playergame"
    WHERE score > 2000;
	
-- e: players w/ gmails
SELECT *
	FROM "public"."player" 
    WHERE emailaddress like '%gmail.com';

-- part 2
-- a: all THE KING's, decreasing order
SELECT *
	FROM "public"."playergame" 
    JOIN player ON playerid = player.id 
    WHERE name = 'The King' 
    ORDER BY score DESC;
	
-- b: winner of specific game
SELECT *
	FROM "public"."playergame"
    JOIN player ON playerid = player.id
    JOIN game ON gameid = game.id
    WHERE time = '2006-06-28 13:20:00'
    ORDER BY score DESC
    LIMIT 1;
-- c: text answer-
-- makes sure that two player ID's can't be the same, so when both players
-- are the same, it doesn't match itself and cause errors.

-- d: text answer-
-- I feel like it could be useful for instances when you want to merge profiles
-- of something. For example, on my iPhone, if I text someone it saves that
-- as just the phone number, but I may want to merge that phone number into an 
-- existing contact.