const articleTableDefinition = `
    CREATE TABLE IF NOT EXISTS articles (
    id UUID PRIMARY KEY,
    source VARCHAR(255),
    author VARCHAR(255),
    title TEXT,
    description TEXT,
    url TEXT,
    url_to_image TEXT,
    published_at DATE,
    content TEXT
    );
`;

export {articleTableDefinition};