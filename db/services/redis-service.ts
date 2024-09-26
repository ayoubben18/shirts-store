"use server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const getBookShirtById = async (id: number) => {
  const cacheKey = `book-shirt-${id}:draft`;

  const cachedData = await redis.get(cacheKey);

  return cachedData;
};

const setBookShirtById = async (id: number, data: any) => {
  const cacheKey = `book-shirt-${id}:draft`;

  await redis.set(cacheKey, data);
};

const setBookPaid = async (id: number, data: any) => {
  const cacheKey = `book-shirt-${id}:paid`;

  await redis.set(cacheKey, data);
};

export { getBookShirtById, setBookShirtById, setBookPaid };
