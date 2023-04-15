mkdir -p ./src/db/temp

for file in ./src/db/models/*.prisma; do
    sed '/\/\/@relations/,$d' "$file" > "./src/db/temp/$(basename "$file")"
done

cat ./src/db/root.prisma ./src/db/temp/*.prisma > ./src/db/schema.prisma
rm -rf ./src/db/temp