import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Sf2 } from "../target/types/sf2";

describe("SF2", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Sf2 as Program<Sf2>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
