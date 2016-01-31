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
FILTERBY = [""]

SETTINGS = {"cols":COLS, "filterby":FILTERBY, "table":"case"}
