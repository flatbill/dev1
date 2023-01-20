import { GoTrueClient } from '@supabase/gotrue-js';
import { RealtimeClientOptions } from '@supabase/realtime-js';
declare type GoTrueClientOptions = ConstructorParameters<typeof GoTrueClient>[0];
export interface SupabaseAuthClientOptions extends GoTrueClientOptions {
}
export declare type Fetch = typeof fetch;
export declare type SupabaseClientOptions<SchemaName> = {
    /**
     * The Postgres schema which your tables belong to. Must be on the list of exposed schemas in Supabase. Defaults to `public`.
     */
    db?: {
        schema?: SchemaName;
    };
    auth?: {
        /**
         * Automatically refreshes the token for logged in users. Defaults to true.
         */
        autoRefreshToken?: boolean;
        /**
         * Optional key name used for storing tokens in local storage.
         */
        storageKey?: string;
        /**
         * Whether to persist a logged in session to storage.
         */
        persistSession?: boolean;
        /**
         * Detect a session from the URL. Used for OAuth login callbacks. Defaults to true.
         */
        detectSessionInUrl?: boolean;
        /**
         * A storage provider. Used to store the logged in session. Defaults to true.
         */
        storage?: SupabaseAuthClientOptions['storage'];
    };
    /**
     * Options passed to the realtime-js instance
     */
    realtime?: RealtimeClientOptions;
    global?: {
        /**
         * A custom `fetch` implementation.
         */
        fetch?: Fetch;
        /**
         * Optional headers for initializing the client.
         */
        headers?: Record<string, string>;
    };
};
export declare type GenericTable = {
    Row: Record<string, unknown>;
    Insert: Record<string, unknown>;
    Update: Record<string, unknown>;
};
export declare type GenericUpdatableView = {
    Row: Record<string, unknown>;
    Insert: Record<string, unknown>;
    Update: Record<string, unknown>;
};
export declare type GenericNonUpdatableView = {
    Row: Record<string, unknown>;
};
export declare type GenericView = GenericUpdatableView | GenericNonUpdatableView;
export declare type GenericFunction = {
    Args: Record<string, unknown>;
    Returns: unknown;
};
export declare type GenericSchema = {
    Tables: Record<string, GenericTable>;
    Views: Record<string, GenericView>;
    Functions: Record<string, GenericFunction>;
};
export {};
//# sourceMappingURL=types.d.ts.map