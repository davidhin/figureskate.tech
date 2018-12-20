```mysql
SELECT business.bussId, 
  (select count(invoices.userId) from invoice where 
  invoice.bussId = a.bussId AND invoice.userId = '3000' ) as invoices,
  (select COUNT(rating.bussId) from rating where rating.bussId = a.bussId ) as ratingCount,
  FROM business a WHERE business.bussId=100
```

```mysql
  SELECT a.CompName, a.SkaterName, b.Nation, SUM(a.TotalSegment) FROM Summary a RIGHT JOIN Summary b ON a.CompName = b.CompName GROUP BY a.CompName, a.SkaterName;

ORDER BY SUM(TotalSegment) desc LIMIT 10;
```

```mysql
select a.CompName, a.SkaterName, SUM(a.TotalSegment)
from (Summary a 
LEFT JOIN Summary b 
ON (a.CompName = b.CompName and a.SkaterName = b.SkaterName and a.Program = b.Program)
)
group by a.CompName, a.SkaterName
LIMIT 10;
```

```mysql
select a.CompName, a.SkaterName, SUM(a.TotalSegment) from Summary a group by a.CompName, a.SkaterName
union
select b.CompName, b.Program, b.TotalSegment from Summary b;
```

```mysql
SELECT DATE_FORMAT(A.day, '%Y-%m-%d') AS DAY, A.campaign_id, A.country, MAX(tableACount), MAX(tableBCount)
FROM (SELECT DATE(DATETIME) AS DAY, campaign_id, country, COUNT(1) tableACount, 0 AS tableBCount
      FROM a GROUP BY DAY, campaign_id, country
      UNION 
      SELECT DATE(DATETIME) AS DAY, campaign_id, country, 0 AS tableACount, COUNT(1) tableBCount
      FROM b GROUP BY DAY, campaign_id, country
     ) AS A
GROUP BY A.day, A.campaign_id, A.country
```

### Modifications

```mysql
UPDATE Components
SET CompName = 'CS Golden Spin 2018' 
WHERE CompName = 'GOLDEN SPIN 2018';

UPDATE Components 
SET CompName = 'CS Lombardia Trophy 2018' 
WHERE CompName = 'Lombardia Trophy';

UPDATE Components 
SET CompName = 'ISU GP NHK Trophy 2018' 
WHERE CompName = 'GPJPN2018 NHK Trophy';

UPDATE Components 
SET CompName = 'CS Nebelhorn Trophy 2018' 
WHERE CompName = 'Nebelhorn Trophy 2018';

UPDATE Components 
SET CompName = 'CS Tallinn Trophy 2018' 
WHERE CompName = 'Tallinn Trophy 2018';

UPDATE Components 
SET CompName = 'CS Ondrej Nepela Trophy 2018' 
WHERE CompName = 'Ondrej Nepela Trophy 2018';

UPDATE Components 
SET CompName = 'CS Autumn Classic International 2018' 
WHERE CompName = '2018 Autumn Classic International';

UPDATE Components 
SET CompName = 'CS U.S. International Figure Skating Classic 2018' 
WHERE CompName = '2018 U.S. International Figure Skating Classic';

UPDATE Components 
SET CompName = 'CS Asian Open Figure Skating Trophy 2018' 
WHERE CompName = 'ISU CS Asian Open Figure Skating Trophy 2018';

UPDATE Components 
SET Program = 'SENIOR MEN FREE SKATING' 
WHERE Program = 'MEN FREE SKATING';

UPDATE Components 
SET Program = 'SENIOR LADIES FREE SKATING' 
WHERE Program = 'LADIES FREE SKATING';

UPDATE Components 
SET Program = 'SENIOR MEN SHORT PROGRAM' 
WHERE Program = 'MEN SHORT PROGRAM';

UPDATE Components 
SET Program = 'SENIOR LADIES SHORT PROGRAM' 
WHERE Program = 'LADIES SHORT PROGRAM';

UPDATE Elements 
SET InfoFlag = NULL 
WHERE InfoFlag = '-10';
```

