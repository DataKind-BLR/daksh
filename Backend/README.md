## Backend scripts go in here

# Data Api

The data api contains a script that works on top of the zynata API to fetch data.

How to use it ?
---------------

To use the script you need to pass your zynata login credentials while running the
script. Something like this.

    python get_list_api.py zyanata_username password

To make it simpler for people, the columns and the filters are put in a separate
*setting.py* file, which looks something like this

    # These are actual column names and work like select query in sql
    # but this does not support aggregations
    COLS = ["combined_case_number",
            "court_name",
            "date_filed",
            "decision_date",
            "court_district",
            "year",
            "case_type",
            "under_sections",
            "under_acts"]

    # These are conditions/filters for the data being fetched
    FILTERBY = ["year='2015'"]

    SETTINGS = {"cols":COLS, "filterby":FILTERBY, "table":"case"}


So to get the desired columns you will have to edit the *COLS* list and to add
any filter you will have to add an item to the *FILTERBY*, the filter conditions
needs to be sql like conditions as the API generates a sql query and directly
fetches the data. This also means you will be facing actual sql errors at times
and also you will have to use the column names that there are in the db.

You can also change the table you are querying to by changing the "table" value
in the *SETTINGS* dictionary.

Incase any issues contact me(JayantP) or anyone available who might be able to
help.