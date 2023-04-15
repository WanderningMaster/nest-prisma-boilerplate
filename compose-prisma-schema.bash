mkdir -p ./src/db/temp

for file in ./src/db/*.chunk.prisma; do
    sed '/\/\/@relations/,$d' "$file" > "./src/db/temp/$(basename "$file")"
done

cat ./src/db/root.prisma ./src/db/temp/*.chunk.prisma > ./src/db/schema.prisma
rm -rf ./src/db/temp