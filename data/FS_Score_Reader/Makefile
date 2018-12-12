default:

.PHONY: reproduce clear data data/tidy data/json

reproduce: clear data

clear: 
	rm -r data
	mkdir -p data/json

data: data/json 

data/json:
	python3 -m scripts.parse_pdfs pdfs 2>&1 | tee data/parsing-log.txt
