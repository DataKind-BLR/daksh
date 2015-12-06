"""categorizeCases.py: Reads the case file and writes back a csv
    with the case primary id and info whether the case is criminal
    or civil"""

__author__ = "Apoorv Kumar"
__date__   = "6/12/2015"

import csv
import os


#---------------------------------------------------

def getCaseTypes(caseFileName):
    casesFile = open( caseFileName, 'r' )
    caseData = csv.DictReader( casesFile )
    ipcStat = []

    for row in caseData:
        ipcExistsFn = lambda x : x.find( "IPC" ) != -1
        ipcExists = 1 in map( ipcExistsFn, [ row["under_acts"], row["under_sections"] ] )

        #columns
        ccn = "combined_case_number"
        cn = "case_number"
        ct = "case_type"
        yr = "year"
        crim = "criminal case"
        dist = "district"

        #if there is a combined case number
        if( ccn in row.keys() ):
            ipcStat.append( { ccn: row[ ccn ], crim : ipcExists }  )
        else:
        #use details as primary key
            ipcStat.append( {\
                cn:row[cn],\
                ct:row[ct],\
                yr:row[yr],\
                crim:row[crim],
                dist:row[dist]} )

    return ipcStat
#---------------------------------------------------

def __main():
    os.chdir( "C:\\Users\\apoor_000\\Sandbox\\Daksh" )
    caseFileName = "cases10k.csv"

    ipcStat = getCaseTypes( caseFileName )
    fout = open( "case_type_" + caseFileName, 'w' )
    outWriter = csv.DictWriter( fout, fieldnames=ipcStat[0].keys(), lineterminator='\n')

    #write header and data
    fout.write( ",".join( ipcStat[0].keys() ) + "\n"  )

    for row in ipcStat:
        outWriter.writerow( row )

    fout.close()
#---------------------------------------------------

__main()
