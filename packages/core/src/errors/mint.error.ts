export type MintErrorDescriptor = {
  tag?: string;
  code: number | string;
  reason: string;
  userMessage?: string;
  extra?: Record<string, string | number | boolean> | undefined;
}

export class MintError extends Error implements MintErrorDescriptor {

  public override readonly message: string;

  public readonly id: string;
  public readonly timestamp: number;
  public readonly tag: MintErrorDescriptor['tag'];
  public readonly code: MintErrorDescriptor['code'];
  public readonly reason: MintErrorDescriptor['reason'];
  public readonly userMessage: MintErrorDescriptor['userMessage'];
  public readonly extra: MintErrorDescriptor['extra'];

  constructor(descriptor: MintErrorDescriptor) {
    super();
    /**
     * Exclude the constructor of this custom error from the stacktrace
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#static_methods
     * 
     * We are disabling ESLint on this line because "captureStackTrace" is not a standard node.js feature,
     * and it's only part of V8. Since Hermez is based on V8, we know "captureStackTrace" is defined.
     * However, we still use the optional chaining operator to avoid runtime errors, just in case.
     * 
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Error as any).captureStackTrace?.(this, MintError);
    this.id = Math.random().toString(36).substring(2);
    this.tag = descriptor?.tag;
    this.timestamp = Date.now();
    this.code = descriptor?.code ?? 1;
    this.reason = descriptor.reason || '<No Message Provided>';
    this.userMessage = descriptor?.userMessage;
    this.extra = descriptor?.extra;
    this.message = `${this.reason} | Code: ${this.code} | ${this.tag || 'NO_TAG'}`;
  }
  // ---------------------

  public static isInstance(error: unknown): error is MintError {
    return error instanceof MintError;
  }
  // ----------------------------------------------------------------------------------------
}

MintError.prototype.name = 'MintError';
// ------------------------------------------------------------------------------------------
