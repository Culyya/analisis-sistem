export function analyzeHair(selections) {
  const result = {
    scalpCondition: "",
    damageLevel: "",
    habitsRisk: "",
    recommendations: [],
    weeklyRoutine: [],
    caution: [],
  };

  // Helper cepat
  const find = (tagPrefix) =>
    selections.find((s) => s?.tag?.startsWith(tagPrefix));

  // ---------------------------
  // 🔍 ANALISIS KULIT KEPALA
  // ---------------------------
  const oily = find("Scalp_Oily") || find("Oily");
  const dry = find("Scalp_Dry") || find("Dry");
  const normal = find("Scalp_Normal") || find("Normal");

  if (oily) result.scalpCondition = "Kulit kepala berminyak";
  else if (dry) result.scalpCondition = "Kulit kepala kering & mudah terkelupas";
  else result.scalpCondition = "Kulit kepala normal";

  // Ketombe
  const dandruff = find("Dandruff_Yes");
  if (dandruff) {
    result.caution.push("Anda mengalami ketombe cukup aktif.");
    result.recommendations.push("Gunakan shampoo anti-ketombe 2–3 kali/minggu.");
  }

  // Gatal
  const itchy = find("Itchy_Often");
  if (itchy) {
    result.caution.push("Kulit kepala mudah gatal, kemungkinan inflamasi.");
    result.recommendations.push("Gunakan shampoo dengan zinc pyrithione atau tea tree.");
  }

  // ---------------------------
  // 🔥 ANALISIS KERUSAKAN RAMBUT
  // ---------------------------
  const split = find("Split_High");
  const breakage = find("Break_High");
  const dull = find("Dull_High");

  let damageScore = 0;
  if (split) damageScore += 2;
  if (breakage) damageScore += 2;
  if (dull) damageScore += 1;

  if (damageScore >= 4) result.damageLevel = "Rusak berat";
  else if (damageScore >= 2) result.damageLevel = "Rusak sedang";
  else result.damageLevel = "Ringan / normal";

  // ---------------------------
  // 🔥 KEBIASAAN BERISIKO
  // ---------------------------
  const heat = find("Heat_Daily");
  const bleach = find("Color_Often");
  const tight = find("Tie_Yes");

  const risks = [];
  if (heat) risks.push("Pemakaian alat panas berlebihan");
  if (bleach) risks.push("Pewarnaan / bleaching terlalu sering");
  if (tight) risks.push("Mengikat rambut terlalu ketat");

  result.habitsRisk = risks.length
    ? risks.join(", ")
    : "Tidak ada kebiasaan berisiko tinggi.";

  // ---------------------------
  // 🎯 TUJUAN PERAWATAN
  // ---------------------------
  const goal = find("Goal");
  if (goal?.tag === "Goal_Growth") {
    result.recommendations.push("Gunakan hair tonic dengan niacinamide atau caffeine.");
    result.recommendations.push("Jaga pori kulit kepala tetap bersih.");
  } else if (goal?.tag === "Goal_Repair") {
    result.recommendations.push("Gunakan hair mask protein 1× per minggu.");
    result.recommendations.push("Gunakan serum anti-breakage setiap selesai keramas.");
  } else if (goal?.tag === "Goal_Shine") {
    result.recommendations.push("Gunakan conditioner dengan argan oil pada setiap keramas.");
    result.recommendations.push("Gunakan hair oil tipis-tipis setelah kering.");
  }

  // ---------------------------
  // 📅 REKOMENDASI RUTIN MINGGUAN
  // ---------------------------
  result.weeklyRoutine = [
    "Cuci rambut 2–3× / minggu dengan shampoo sesuai kondisi kulit kepala.",
    "Gunakan conditioner hanya pada batang & ujung rambut.",
    "Gunakan hair mask 1× / minggu.",
    "Gunakan tonic atau serum sesuai tujuan perawatan.",
    "Kurangi alat panas, atau pakai heat protectant.",
  ];

  return result;
}
