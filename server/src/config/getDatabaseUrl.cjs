const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/f1-racing_development",
      test: "postgres://postgres:postgres@localhost:5432/f1-racing_test",
      e2e: "postgres://postgres:postgres@localhost:5432/f1-racing_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
