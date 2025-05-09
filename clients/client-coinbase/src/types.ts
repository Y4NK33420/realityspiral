import type { Side } from "@realityspiral/plugin-synfutures";

export interface WebhookEvent {
	event: "buy" | "sell";
	ticker: string;
	price: number;
	side: "long" | "short";
	timestamp: number;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	metadata?: Record<string, any>;
}

export interface TradeAction {
	type: "BUY" | "SELL";
	ticker: string;
	amount: number;
	price?: number;
	side: Side;
}

export const blockExplorerBaseTxUrl = (txHash: string) =>
	`https://basescan.org/tx/${txHash}`;
export const blockExplorerBaseAddressUrl = (address: string) =>
	`https://basescan.org/address/${address}`;

export const supportedTickers = ["ETH", "WETH", "BTC", "WBTC", "CBBTC"];
