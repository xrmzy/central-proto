### CENTRAL PROTO MAKEFILE ###
# Bisa dipanggil dari luar:
#   make -C node_modules/@xrmzy/proto gen-node OUT_DIR=./pb
#   make -C node_modules/@xrmzy/proto gen-go OUT_DIR=./pb

PROTO_DIR := ./proto
PROTO_FILES := $(shell find $(PROTO_DIR) -name "*.proto")

# Default output (bisa di override dari luar)
OUT_DIR ?= ./pb

# Tools for NodeJS
NODE_PROTOC := ./node_modules/.bin/grpc_tools_node_protoc
NODE_GRPC_PLUGIN := ./node_modules/.bin/grpc_tools_node_protoc_plugin

# Tools for Go
GO_PROTOC_GEN := protoc-gen-go
GO_GRPC_GEN := protoc-gen-go-grpc

ensure_dir:
	mkdir -p $(OUT_DIR)

##############################################
#        NODEJS GENERATE SECTION             #
##############################################
gen-node: ensure_dir
	@echo "Generating NodeJS gRPC stubs into $(OUT_DIR)..."
	$(NODE_PROTOC) \
		-I=$(PROTO_DIR) \
		--js_out=import_style=commonjs,binary:$(OUT_DIR) \
		--grpc_out=grpc_js:$(OUT_DIR) \
		--plugin=protoc-gen-grpc=$(NODE_GRPC_PLUGIN) \
		$(PROTO_FILES)
	@echo "NodeJS generation completed."

##############################################
#         GO GENERATE SECTION                #
##############################################
gen-go: ensure_dir
	@echo "Generating Go protobuf into $(OUT_DIR)..."
	protoc \
		-I=$(PROTO_DIR) \
		--go_out=$(OUT_DIR) --go_opt=paths=source_relative \
		--go-grpc_out=$(OUT_DIR) --go-grpc_opt=paths=source_relative \
		$(PROTO_FILES)
	@echo "Go generation completed."

##############################################
#             CLEAN OUTPUT                   #
##############################################
clean:
	rm -rf $(OUT_DIR)

gen-all: gen-node gen-go
