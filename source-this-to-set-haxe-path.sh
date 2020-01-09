#!/bin/bash

# If you source this file, it'll set your haxe/haxelib/neko
# executable path correctly and make sure that the libraries 
# (.dll/.dso/etc.) are loaded from the right place.

# To use this file, run:
# $ REPO="/path/to/TileCraft-repository" source ./source-this-to-set-haxe-path.sh

export HAXE_STD_PATH="$REPO/haxe-3.2.0/std/"
export PATH="$REPO/haxe-3.2.0/:$REPO/neko-2.3.0/:$PATH"
export HAXELIB_PATH="$REPO/haxelib_downloads/"
export HAXEPATH="$REPO/haxe-3.2.0/"
export LD_LIBRARY_PATH="$REPO/neko-2.3.0/"
