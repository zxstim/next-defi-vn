import { PrismaClient } from '@prisma/client'
import SimpleWebAuthnServer from '@simplewebauthn/server';

const prisma = new PrismaClient()

export async function findUserByWebAuthnId(webAuthnId) {
    return await prisma.user.findUnique({ where: { webAuthnId } });
  }