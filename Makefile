PROTO_FILES := $(shell find proto -name "*.proto")
GEN_DIR=./pb
OUT_DIR=./pb

# Windows-compatible paths for plugins
PROTO_GEN_JS := ./node_modules/.bin/protoc-gen-js
PROTO_GEN_GRPC := ./node_modules/.bin/grpc_tools_node_protoc_plugin

# Ensure the output directory exists
ensure_dir:
	mkdir -p $(OUT_DIR)

gen-go: ensure_dir
	protoc \
		-I=proto \
		--go_out=$(OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(OUT_DIR) --go-grpc_opt=paths=source_relative \
		$(PROTO_FILES)

gen-node: ensure_dir
	@echo "Generating JS + gRPC stubs..."
	protoc \
		-I=proto \
		--plugin=protoc-gen-js=$(PROTO_GEN_JS) \
		--js_out=import_style=commonjs,binary:$(OUT_DIR) \
		--plugin=protoc-gen-grpc=$(PROTO_GEN_GRPC) \
		--grpc_out=grpc_js:$(OUT_DIR) \
		$(PROTO_FILES)

gen-all: gen-go gen-node