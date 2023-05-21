
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const KDE_FULL_SESSION: string;
	export const ZPLUG_ERROR_LOG: string;
	export const TMUX: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const ZPLUG_THREADS: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const XCURSOR_SIZE: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const ZSH: string;
	export const FPATH: string;
	export const GTK_MODULES: string;
	export const HOMEBREW_PREFIX: string;
	export const KDE_SESSION_VERSION: string;
	export const XDG_SEAT_PATH: string;
	export const ZPLUG_BIN: string;
	export const MANAGERPID: string;
	export const _ZPLUG_VERSION: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const P9K_TTY: string;
	export const SYSTEMD_EXEC_PID: string;
	export const ZPLUG_HOME: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const TERMINATOR_DBUS_NAME: string;
	export const ZPLUG_FILTER: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const git_status: string;
	export const npm_config_metrics_registry: string;
	export const INFOPATH: string;
	export const LOGNAME: string;
	export const PERIOD: string;
	export const _ZPLUG_URL: string;
	export const JOURNAL_STREAM: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const XDG_SESSION_CLASS: string;
	export const ZPLUG_LOADFILE: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const _ZPLUG_CONFIG_SUBSHELL: string;
	export const npm_config_cache: string;
	export const ZSH_CACHE_DIR: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const HOMEBREW_CELLAR: string;
	export const INVOCATION_ID: string;
	export const ZPLUG_CACHE_DIR: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XCURSOR_THEME: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_PATH: string;
	export const _ZPLUG_OHMYZSH: string;
	export const _ZPLUG_PREZTO: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const TERMINATOR_DBUS_PATH: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const TERM_PROGRAM: string;
	export const XAUTHORITY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const cmus_status: string;
	export const SHELL: string;
	export const TERMINATOR_UUID: string;
	export const _ZPLUG_AWKPATH: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const ZPLUG_PROTOCOL: string;
	export const tmux_version: string;
	export const ZPLUG_REPOS: string;
	export const GPG_AGENT_INFO: string;
	export const P9K_SSH: string;
	export const XDG_VTNR: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_CONFIG_DIRS: string;
	export const _P9K_TTY: string;
	export const npm_config_global_prefix: string;
	export const HOMEBREW_REPOSITORY: string;
	export const QTWEBENGINE_DICTIONARIES_PATH: string;
	export const ZPLUG_USE_CACHE: string;
	export const npm_command: string;
	export const I3SOCK: string;
	export const KDE_SESSION_UID: string;
	export const TMUX_PLUGIN_MANAGER_PATH: string;
	export const MANPATH: string;
	export const TMUX_PANE: string;
	export const VTE_VERSION: string;
	export const ZPLUG_ROOT: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		KDE_FULL_SESSION: string;
		ZPLUG_ERROR_LOG: string;
		TMUX: string;
		PAM_KWALLET5_LOGIN: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		ZPLUG_THREADS: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		SHLVL: string;
		XCURSOR_SIZE: string;
		npm_config_noproxy: string;
		HOME: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_json: string;
		NVM_INC: string;
		ZSH: string;
		FPATH: string;
		GTK_MODULES: string;
		HOMEBREW_PREFIX: string;
		KDE_SESSION_VERSION: string;
		XDG_SEAT_PATH: string;
		ZPLUG_BIN: string;
		MANAGERPID: string;
		_ZPLUG_VERSION: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		P9K_TTY: string;
		SYSTEMD_EXEC_PID: string;
		ZPLUG_HOME: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		TERMINATOR_DBUS_NAME: string;
		ZPLUG_FILTER: string;
		COLOR: string;
		NVM_DIR: string;
		git_status: string;
		npm_config_metrics_registry: string;
		INFOPATH: string;
		LOGNAME: string;
		PERIOD: string;
		_ZPLUG_URL: string;
		JOURNAL_STREAM: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		_: string;
		npm_config_prefix: string;
		XDG_SESSION_CLASS: string;
		ZPLUG_LOADFILE: string;
		TERM: string;
		XDG_SESSION_ID: string;
		_ZPLUG_CONFIG_SUBSHELL: string;
		npm_config_cache: string;
		ZSH_CACHE_DIR: string;
		npm_config_node_gyp: string;
		PATH: string;
		HOMEBREW_CELLAR: string;
		INVOCATION_ID: string;
		ZPLUG_CACHE_DIR: string;
		NODE: string;
		npm_package_name: string;
		XCURSOR_THEME: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_PATH: string;
		_ZPLUG_OHMYZSH: string;
		_ZPLUG_PREZTO: string;
		DISPLAY: string;
		LANG: string;
		TERMINATOR_DBUS_PATH: string;
		XDG_CURRENT_DESKTOP: string;
		TERM_PROGRAM: string;
		XAUTHORITY: string;
		XDG_SESSION_DESKTOP: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		cmus_status: string;
		SHELL: string;
		TERMINATOR_UUID: string;
		_ZPLUG_AWKPATH: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		ZPLUG_PROTOCOL: string;
		tmux_version: string;
		ZPLUG_REPOS: string;
		GPG_AGENT_INFO: string;
		P9K_SSH: string;
		XDG_VTNR: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		XDG_CONFIG_DIRS: string;
		_P9K_TTY: string;
		npm_config_global_prefix: string;
		HOMEBREW_REPOSITORY: string;
		QTWEBENGINE_DICTIONARIES_PATH: string;
		ZPLUG_USE_CACHE: string;
		npm_command: string;
		I3SOCK: string;
		KDE_SESSION_UID: string;
		TMUX_PLUGIN_MANAGER_PATH: string;
		MANPATH: string;
		TMUX_PANE: string;
		VTE_VERSION: string;
		ZPLUG_ROOT: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
