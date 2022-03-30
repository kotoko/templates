SRC := src/
BIN_RELEASE := bin_release/
BIN_DEBUG := bin_debug/

MKDIR := mkdir -p


release: $(BIN_RELEASE)
	cd "$(BIN_RELEASE)" && cmake -DCMAKE_BUILD_TYPE=Release ../"$(SRC)"
	cd "$(BIN_RELEASE)" && make

debug: $(BIN_DEBUG)
	cd "$(BIN_DEBUG)" && cmake -DCMAKE_BUILD_TYPE=Debug ../"$(SRC)"
	cd "$(BIN_DEBUG)" && make

clean:
	$(RM) -r "$(BIN_RELEASE)"
	$(RM) -r "$(BIN_DEBUG)"

$(BIN_RELEASE):
	$(MKDIR) "$(BIN_RELEASE)"

$(BIN_DEBUG):
	$(MKDIR) "$(BIN_DEBUG)"

.PHONY: release debug clean
