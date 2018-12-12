import json
import sys
import os
import MySQLdb
from pprint import pprint

if len(sys.argv) < 2:
    print "ERROR: Need at least one file"
    sys.exit

if os.path.exists("Summary.txt"):
    os.remove("Summary.txt") 
if os.path.exists("Components.txt"):
    os.remove("Components.txt") 
if os.path.exists("Elements.txt"):
    os.remove("Elements.txt") 

for i in range(1, len(sys.argv)):
    print sys.argv[i]
    with open(sys.argv[i]) as f:
        # Parse the JSON file
        data = json.load(f) 

        # --------------------------------------------------- # 
        #                       Summary                       # 
        # --------------------------------------------------- # 

        # Write SQL stuff here
        f= open("Summary.txt","a+")
        # Read JSON and write to the TXT file
        for j in range(0, len(data["performances"])):
            competition = data["performances"][j]["metadata"]["competition"].encode("utf-8")
            name = data["performances"][j]["metadata"]["name"].encode("utf-8").replace("Name\n",'')
            nation = data["performances"][j]["metadata"]["nation"].encode("utf-8").replace("Nation\n",'')
            program = data["performances"][j]["metadata"]["program"].encode("utf-8")
            rank = data["performances"][j]["metadata"]["rank"].encode("utf-8").replace("Rank \n ",'')
            sn = data["performances"][j]["metadata"]["starting_number"].encode("utf-8").replace("Starting\nNumber\n ",'').replace("Number\n",'')
            tcs = data["performances"][j]["metadata"]["total_component_score"].encode("utf-8").replace("Total\nProgram  Component\nScore (factored)\n ",'').replace("Component\nScore (factored)\n", '')
            tds = data["performances"][j]["metadata"]["total_deductions"].encode("utf-8").replace("Total\nDeductions\n ",'')
            tes = data["performances"][j]["metadata"]["total_element_score"].encode("utf-8").replace("Total \nElement\nScore\n ",'').replace("Score\n",'')
            tss = data["performances"][j]["metadata"]["total_segment_score"].encode("utf-8").replace("Total \nSegment\nScore\n ",'').replace("Score\n",'')
            f.write('{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}\t{8}\t{9}\n'.format(competition, name, nation, program, rank, sn, tcs, tds, tes, tss))
        # Close file
        f.close() 

        # --------------------------------------------------- # 
        #                       Components                    # 
        # --------------------------------------------------- # 
        
        # Write SQL stuff here
        f= open("Components.txt","a+")
        # Read JSON and write to the TXT file
        for j in range(0, len(data["performances"])):
            competition = data["performances"][j]["metadata"]["competition"].encode("utf-8")
            name = data["performances"][j]["metadata"]["name"].encode("utf-8").replace("Name\n",'')
            program = data["performances"][j]["metadata"]["program"].encode("utf-8")
            for k in range(0, len(data["performances"][j]["components"])):
                J1 = data["performances"][j]["components"][k]["J1"];
                J2 = data["performances"][j]["components"][k]["J2"];
                J3 = data["performances"][j]["components"][k]["J3"];
                J4 = data["performances"][j]["components"][k]["J4"];
                J5 = data["performances"][j]["components"][k]["J5"];
                J6 = data["performances"][j]["components"][k]["J6"];
                J7 = data["performances"][j]["components"][k]["J7"];
                J8 = data["performances"][j]["components"][k]["J8"];
                J9 = data["performances"][j]["components"][k]["J9"];
                CompDesc = data["performances"][j]["components"][k]["component_desc"];
                Factor = data["performances"][j]["components"][k]["factor"];
                Score = data["performances"][j]["components"][k]["scores_of_panel"];
                FinalStr = '{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}\t{8}\t{9}\t{10}\t{11}\t{12}\t{13}\t{14}\n'.format(competition, name, program, J1, J2, J3, J4, J5, J6, J7, J8, J9, CompDesc, Factor, Score)
                f.write(FinalStr.replace("nan",'-10'))
        # Close file
        f.close() 

        # --------------------------------------------------- # 
        #                       Elements                      # 
        # --------------------------------------------------- # 

        # Write SQL stuff here
        f= open("Elements.txt","a+")
        # Read JSON and write to the TXT file
        for j in range(0, len(data["performances"])):
            competition = data["performances"][j]["metadata"]["competition"].encode("utf-8")
            name = data["performances"][j]["metadata"]["name"].encode("utf-8").replace("Name\n",'')
            program = data["performances"][j]["metadata"]["program"].encode("utf-8")
            for k in range(0, len(data["performances"][j]["elements"])):
                J1 = data["performances"][j]["elements"][k]["J1"];
                J2 = data["performances"][j]["elements"][k]["J2"];
                J3 = data["performances"][j]["elements"][k]["J3"];
                J4 = data["performances"][j]["elements"][k]["J4"];
                J5 = data["performances"][j]["elements"][k]["J5"];
                J6 = data["performances"][j]["elements"][k]["J6"];
                J7 = data["performances"][j]["elements"][k]["J7"];
                J8 = data["performances"][j]["elements"][k]["J8"];
                J9 = data["performances"][j]["elements"][k]["J9"];
                BaseValue = data["performances"][j]["elements"][k]["base_value"];
                ElementDesc = data["performances"][j]["elements"][k]["element_desc"];
                ElementNum = data["performances"][j]["elements"][k]["element_num"];
                GOE = data["performances"][j]["elements"][k]["goe"];
                InfoFlag = data["performances"][j]["elements"][k]["info_flag"];
                PanelScore = data["performances"][j]["elements"][k]["scores_of_panel"];
                FinalStr = '{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}\t{8}\t{9}\t{10}\t{11}\t{12}\t{13}\t{14}\t{15}\t{16}\t{17}\n'\
                        .format(competition, name, program, \
                        J1, J2, J3, J4, J5, J6, J7, J8, J9, \
                        BaseValue, ElementDesc, ElementNum, GOE, InfoFlag,PanelScore)
                f.write(FinalStr.replace("nan",'-10'))
        # Close file
        f.close() 


# Update SQL Database
connection = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='Light741', db='fskate')
cursor = connection.cursor()
query = "LOAD DATA LOCAL INFILE './Summary.txt' INTO TABLE Summary;"
cursor.execute( query )
connection.commit()

# Update SQL Database
connection = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='Light741', db='fskate')
cursor = connection.cursor()
query = "LOAD DATA LOCAL INFILE './Components.txt' INTO TABLE Components;"
cursor.execute( query )
connection.commit()

# Update SQL Database
connection = MySQLdb.Connect(host='127.0.0.1', user='root', passwd='Light741', db='fskate')
cursor = connection.cursor()
query = "LOAD DATA LOCAL INFILE './Elements.txt' INTO TABLE Elements;"
cursor.execute( query )
connection.commit()
