# Final

```mysql
CREATE TABLE Summary (
    CompName char(255),
    SkaterName char(255),
    Nation char(128),
    Program char(128),
  	Rank smallint,
    StartingNum smallint,
  	TotalComponents decimal(6,3),
  	TotalDeductions decimal(6,3),
  	TotalElements decimal(6,3),
  	TotalSegment decimal(6,3),
    PRIMARY KEY (CompName, SkaterName, Program)
); 

CREATE TABLE Components (
    CompName char(255),
    SkaterName char(255),
    Program char(128),
  	J1 decimal(6,3),
  	J2 decimal(6,3),
  	J3 decimal(6,3),
  	J4 decimal(6,3),
  	J5 decimal(6,3),
  	J6 decimal(6,3),
  	J7 decimal(6,3),
  	J8 decimal(6,3),
  	J9 decimal(6,3),
    CompDesc char(128),
  	Factor decimal(6,3),
  	PanelScore decimal(6,3),
  	PRIMARY KEY (CompName, SkaterName, Program, CompDesc)
); 

CREATE TABLE Elements (
    CompName char(255),
    SkaterName char(255),
    Program char(128),
  	J1 decimal(6,3),
  	J2 decimal(6,3),
  	J3 decimal(6,3),
  	J4 decimal(6,3),
  	J5 decimal(6,3),
  	J6 decimal(6,3),
  	J7 decimal(6,3),
  	J8 decimal(6,3),
  	J9 decimal(6,3),
    BaseValue decimal(6,3),
  	ElementDesc char(30),
  	ElementNum int,
  	GOE decimal(6,3),
  	InfoFlag char(5),
  	PanelScore decimal(6,3),
  	PRIMARY KEY (CompName, SkaterName, Program, ElementNum)
); 
```





# Information

##Table 1: Summary

1. UNIQ INDEX
2. Competition Name
3. Name
4. Nation
5. Program
6. Rank
7. Total Component Score
8. Total Deductions
9. Total Element Score
10. Total Segment Score

```sql
drop table Summary;
CREATE TABLE Summary (
    CompName char(255),
    SkaterName char(255),
    Nation char(128),
    Program char(128),
  	Rank smallint,
    StartingNum smallint,
  	TotalComponents decimal(6,3),
  	TotalDeductions decimal(6,3),
  	TotalElements decimal(6,3),
  	TotalSegment decimal(6,3),
    PRIMARY KEY (CompName, SkaterName, Program)
); 
describe Summary;

LOAD DATA LOCAL INFILE '/home/davidhin/myProjects/figureskate.tech/data/json/Summary.txt' INTO TABLE Summary;

select * from Summary;
```

## Table 2: Elements (multiple for each Summary)

```mysql
drop table Elements;
CREATE TABLE Elements (
    CompName char(255),
    SkaterName char(255),
    Program char(128),
  	J1 decimal(6,3),
  	J2 decimal(6,3),
  	J3 decimal(6,3),
  	J4 decimal(6,3),
  	J5 decimal(6,3),
  	J6 decimal(6,3),
  	J7 decimal(6,3),
  	J8 decimal(6,3),
  	J9 decimal(6,3),
    BaseValue decimal(6,3),
  	ElementDesc char(30),
  	ElementNum int,
  	GOE decimal(6,3),
  	InfoFlag char(5),
  	PanelScore decimal(6,3),
  	PRIMARY KEY (CompName, SkaterName, Program, ElementNum)
); 
describe Summary;

LOAD DATA LOCAL INFILE '/home/davidhin/myProjects/figureskate.tech/data/json/Summary.txt' INTO TABLE Summary;

select * from Summary;


FOREIGN KEY (`CompName`,`SkaterName`,`Program`) 
    REFERENCES Summary(`CompName`,`SkaterName`,`Program`)
```



- CompName
- SkaterName
- Program

- J1
- J2
- J3
- J4
- J5
- J6
- J7
- J8
- J9
- Base Value
- Element Desc
- Element Num
- GOE
- Info flag
- Scores of Panel

## Table 3: Components (multiple for each Summary)

```mysql
drop table Components;
CREATE TABLE Components (
    CompName char(255),
    SkaterName char(255),
    Program char(128),
  	J1 decimal(6,3),
  	J2 decimal(6,3),
  	J3 decimal(6,3),
  	J4 decimal(6,3),
  	J5 decimal(6,3),
  	J6 decimal(6,3),
  	J7 decimal(6,3),
  	J8 decimal(6,3),
  	J9 decimal(6,3),
    CompDesc char(128),
  	Factor decimal(6,3),
  	PanelScore decimal(6,3),
  	PRIMARY KEY (CompName, SkaterName, Program, CompDesc)
); 
describe Summary;

LOAD DATA LOCAL INFILE '/home/davidhin/myProjects/figureskate.tech/data/json/Summary.txt' INTO TABLE Summary;

select * from Summary;


FOREIGN KEY (`CompName`,`SkaterName`,`Program`) 
    REFERENCES Summary(`CompName`,`SkaterName`,`Program`)
```



- CompName
- SkaterName
- J1
- J2
- J3
- J4
- J5
- J6
- J7
- J8
- J9
- Component Desc
- Factor
- Score of panel

