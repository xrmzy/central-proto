PROTO_FILES := $(shell find ./hris -name "*.proto")
GEN_DIR=./pb
OUT_DIR = ./pb
PROTOC = protoc
PROTO_GEN_JS = ./node_modules/protoc-gen-js/bin/protoc-gen-js
PROTO_GEN_GRPC = ./node_modules/grpc-tools/bin/grpc_node_plugin

gen-go:
	mkdir -p pb
	protoc \
		-I . \
		--go_out=pb \
		--go-grpc_out=pb \
		$(PROTO_FILES)

gen-node:
	@echo "Generating JS + gRPC stubs..."
	mkdir -p $(OUT_DIR)
	$(PROTOC) \
		-I . \
		--plugin=protoc-gen-js=$(PROTO_GEN_JS) \
		--js_out=import_style=commonjs,binary:$(OUT_DIR) \
		--plugin=protoc-gen-grpc=$(PROTO_GEN_GRPC) \
		--grpc_out=grpc_js:$(OUT_DIR) \
		$(PROTO_FILES)

gen-all: gen-go gen-node