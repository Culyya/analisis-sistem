<template>
    <div
        class="relative h-screen overflow-auto [-ms-overflow-style:none] [scrollbar-width:none] font-poppins bg-gray-100">

        <div class="mx-auto">
            <div class="flex flex-col lg:flex-row h-auto lg:h-screen">

                <!-- SIDEBAR -->
                <aside
                    class="w-full lg:w-1/3 xl:w-1/4 bg-white px-6 sm:px-8 lg:px-10 pt-10 pb-12 overflow-y-auto sm:block hidden">

                    <!-- BRAND -->
                    <a href="/" class="flex text-2xl font-bold text-gray-800 pb-8">
                        <img src="/logo.png" alt="Hricho Logo" class="h-6.5 sm:h-6.5 mr-2" />
                        hricho
                    </a>

                    <!-- TITLE -->
                    <h1 class="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                        Jaga kesehatan <br />
                        rambut Anda
                    </h1>

                    <!-- SUBTEXT -->
                    <p class="text-sm text-gray-500 pt-4 pb-10 leading-relaxed max-w-sm">
                        Jawab beberapa pertanyaan singkat agar kami dapat memberikan rekomendasi
                        perawatan rambut yang paling sesuai untuk Anda.
                    </p>

                    <!-- STEPS LIST -->
                    <nav class="space-y-8 sm:space-y-10">
                        <div v-for="(step, idx) in steps" :key="step.id" class="flex items-start gap-4">

                            <!-- CIRCLE -->
                            <div class="relative flex flex-col items-center">

                                <!-- Outer circle -->
                                <div :class="[
                                    'w-7 h-7 rounded-full border-4 flex items-center justify-center transition',
                                    idx <= currentStepIndex
                                        ? 'border-purple-400 bg-purple-600'
                                        : 'border-gray-300 bg-white'
                                ]">
                                </div>

                                <!-- Connector line -->
                                <div v-if="idx < steps.length - 1" class="w-px flex-1 bg-gray-300 mt-2"
                                    style="min-height: 40px">
                                </div>
                            </div>

                            <!-- STEP TEXT -->
                            <div class="flex-1">
                                <div class="text-md font-semibold"
                                    :class="idx <= currentStepIndex ? 'text-gray-800' : 'text-gray-400'">
                                    {{ step.title }}
                                </div>
                                <p class="text-xs text-gray-400 leading-relaxed pt-1 max-w-xs">
                                    {{ step.subtitle }}
                                </p>
                            </div>

                        </div>
                    </nav>

                </aside>

                <!-- MAIN CONTENT AREA -->
                <main class="flex-1 p-4 sm:p-6 lg:p-12 bg-purple-600">
                    <div class="p-4 sm:p-8 h-full overflow-y-auto">

                        <!-- PROGRESS -->
                        <div class="sm:flex hidden gap-2 py-4">
                            <div v-for="i in totalSteps" :key="i" :class="[
                                'h-2 flex-1 rounded-full transition-all duration-300',
                                i <= currentStep ? 'bg-purple-400' : 'bg-gray-200'
                            ]"></div>
                        </div>

                        <!-- MOBILE HORIZONTAL STEPPER -->
                        <div class="sm:hidden w-full px-4 py-4">

                            <!-- Progress bar horizontal -->
                            <div class="flex items-center gap-2 pb-3">
                                <div v-for="i in steps.length" :key="i" :class="[
                                    'h-2 flex-1 rounded-full transition-all duration-300',
                                    i - 1 <= currentStepIndex ? 'bg-purple-500' : 'bg-gray-300'
                                ]"></div>
                            </div>

                            <!-- CURRENT STEP TEXT -->
                            <p class="text-center text-sm font-semibold text-white">
                                Step {{ currentStepIndex + 1 }}: {{ steps[currentStepIndex].title }}
                            </p>
                        </div>



                        <!-- TITLE -->
                        <div class="flex flex-col sm:flex-row sm:items-start justify-between sm:pt-10">

                            <div>
                                <div class="text-sm text-white">Pertanyaan</div>
                                <h2 class="text-2xl sm:text-3xl font-extrabold text-white pt-2">
                                    {{ currentQuestion.title }}
                                </h2>
                                <p class="text-sm text-white pt-2 max-w-xl">
                                    {{ currentQuestion.description }}
                                </p>
                            </div>

                            <!-- Question number circle -->
                            <div class="hidden sm:flex items-center gap-2">
                                <div class="text-xs text-white">0{{ currentQuestionIndex + 1 }}</div>
                                <div
                                    class="w-10 h-10 rounded-full border border-white flex items-center justify-center text-sm text-white">
                                    {{ pad(currentQuestionIndex + 1) }}
                                </div>
                            </div>
                        </div>

                        <!-- OPTIONS -->
                        <div class="pt-10">
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

                                <button v-for="(opt, i) in currentQuestion.options" :key="i" @click="selectOption(opt)"
                                    :class="[
                                        'p-5 rounded-2xl border-2 transition-all bg-white duration-200 text-left flex flex-col justify-between h-36 shadow-sm',
                                        isSelected(opt)
                                            ? 'border-purple-800 bg-white'
                                            : 'border-purple-500 bg-white hover:bg-gray-50'
                                    ]">

                                    <div>
                                        <div class="pt-3 text-lg font-semibold text-gray-800">
                                            {{ opt.label }}
                                        </div>
                                    </div>

                                    <div class="flex items-center justify-end">
                                        <svg v-if="isSelected(opt)" xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6 text-purple-800" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </button>

                            </div>
                        </div>

                        <!-- NAVIGATION -->
                        <div class=" pt-6 sm:pt-14 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">

                            <div class="text-sm text-white hidden sm:block">
                                Step
                                <span class="font-black text-purple-900">{{ currentStepIndex + 1 }}</span>
                                dari {{ steps.length }}
                            </div>

                            <div class="flex items-center gap-3">
                                <button @click="prev" :disabled="currentQuestionIndex === 0"
                                    class="px-8 py-2 rounded-full border border-gray-300 bg-white text-purple-600 hover:bg-gray-100 disabled:opacity-50">
                                    Sebelumnya
                                </button>

                                <button @click="next" :disabled="!hasSelection"
                                    class="inline-flex items-center gap-2 bg-purple-800 text-white px-5 py-2 rounded-full shadow-md hover:bg-purple-700 disabled:opacity-40">
                                    <span>Selanjutnya</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </main>

            </div>
        </div>

    </div>
</template>



<script setup>
import { reactive, computed, ref } from 'vue'
import { analyzeHair } from "../utils/analyzeHair"
import HairResult from "./HairResult.vue"

const showResult = ref(false)
const finalResult = ref(null)

/*
  Layout & behavior:
  - 15 questions total (3 per step -> 5 steps)
  - questions[] array holds 15 items
  - steps[] maps to groups (3 each)
  - selections[] stores chosen option for each question
*/

const currentStep = 1 // step aktif (index mulai 0)
const totalSteps = 5

const steps = [
    { id: 's1', title: 'Umum', subtitle: 'Detail umum' },
    { id: 's2', title: 'Kulit Kepala', subtitle: 'Kondisi kulit kepala' },
    { id: 's3', title: 'Kerusakan', subtitle: 'Kerusakan rambut' },
    { id: 's4', title: 'Kebiasaan', subtitle: 'Gaya hidup & penataan' },
    { id: 's5', title: 'Rekomendasi', subtitle: 'Hasil & saran' },
];

// QUESTIONS (15) - each question has options with label + optional desc + tag
const questions = [
    // Step 1 (General)
    {
        id: 'q1',
        title: 'Apa jenis kulit kepala Anda?',
        description: 'Pilih yang paling sesuai dengan kondisi kulit kepala Anda.',
        options: [
            { label: 'Berminyak', tag: 'Oily' },
            { label: 'Kering', tag: 'Dry' },
            { label: 'Normal', tag: 'Normal' },
        ],
    },
    {
        id: 'q2',
        title: 'Seberapa sering Anda keramas?',
        description: 'Frekuensi keramas mempengaruhi kondisi kulit kepala.',
        options: [
            { label: 'Harian', tag: 'Daily' },
            { label: '3-4x/minggu', tag: 'Regular' },
            { label: '1-2x/minggu', tag: 'Rare' },
        ],
    },
    {
        id: 'q3',
        title: 'Apakah Anda memiliki alergi atau kondisi kulit?',
        description: 'Misal: psoriasis, eksim, atau alergi topikal.',
        options: [
            { label: 'Ya, ada', tag: 'HasCondition' },
            { label: 'Tidak', tag: 'NoCondition' },
            { label: 'Tidak yakin', tag: 'Unsure' },
        ],
    },

    // Step 2 (Scalp)
    {
        id: 'q4',
        title: 'Apakah Anda mengalami ketombe?',
        description: 'Nampak serpihan putih atau putih kekuningan?',
        options: [
            { label: 'Sering', tag: 'Dandruff_Yes' },
            { label: 'Kadang-kadang', tag: 'Dandruff_Sometimes' },
            { label: 'Tidak', tag: 'Dandruff_No' },
        ],
    },
    {
        id: 'q5',
        title: 'Apakah kulit kepala terasa gatal?',
        description: 'Rasa gatal yang mengganggu/berulang?',
        options: [
            { label: 'Sering gatal', tag: 'Itchy_Often' },
            { label: 'Kadang', tag: 'Itchy_Sometimes' },
            { label: 'Tidak', tag: 'Itchy_No' },
        ],
    },
    {
        id: 'q6',
        title: 'Bagaimana tekstur kulit kepala (kering/terkelupas)?',
        description: 'Kering, mengelupas, atau normal?',
        options: [
            { label: 'Kering & terkelupas', tag: 'Scalp_Dry' },
            { label: 'Minyak berlebih', tag: 'Scalp_Oily' },
            { label: 'Normal', tag: 'Scalp_Normal' },
        ],
    },

    // Step 3 (Damage)
    {
        id: 'q7',
        title: 'Apakah ujung rambut Anda bercabang?',
        description: 'Cek ujung rambut apakah terbelah/rapuh.',
        options: [
            { label: 'Banyak bercabang', tag: 'Split_High' },
            { label: 'Sedikit', tag: 'Split_Low' },
            { label: 'Tidak', tag: 'Split_No' },
        ],
    },
    {
        id: 'q8',
        title: 'Seberapa kusam rambut Anda?',
        description: 'Apakah rambut terlihat kurang bercahaya?',
        options: [
            { label: 'Sangat kusam', tag: 'Dull_High' },
            { label: 'Agak kusam', tag: 'Dull_Mid' },
            { label: 'Berkilau', tag: 'Dull_No' },
        ],
    },
    {
        id: 'q9',
        title: 'Apakah rambut mudah patah saat disisir?',
        description: 'Rambut rapuh ketika disisir atau ditarik ringan?',
        options: [
            { label: 'Sering patah', tag: 'Break_High' },
            { label: 'Kadang', tag: 'Break_Mid' },
            { label: 'Jarang', tag: 'Break_No' },
        ],
    },

    // Step 4 (Habits)
    {
        id: 'q10',
        title: 'Seberapa sering Anda memakai alat panas (catok/dryer)?',
        description: 'Penggunaan alat panas berpengaruh besar pada kerusakan.',
        options: [
            { label: 'Harian', tag: 'Heat_Daily' },
            { label: 'Beberapa kali seminggu', tag: 'Heat_Weekly' },
            { label: 'Jarang', tag: 'Heat_Rare' },
        ],
    },
    {
        id: 'q11',
        title: 'Seberapa sering Anda melakukan pewarnaan / bleaching?',
        description: 'Warna & bleaching dapat membuat rambut kering/rapuh.',
        options: [
            { label: 'Sering (>=6 bln)', tag: 'Color_Often' },
            { label: 'Kadang (6-12 bln)', tag: 'Color_Sometimes' },
            { label: 'Tidak pernah', tag: 'Color_No' },
        ],
    },
    {
        id: 'q12',
        title: 'Apakah Anda mengikat rambut sangat ketat?',
        description: 'Ikat rambut ketat dapat menyebabkan kerontokan mekanis.',
        options: [
            { label: 'Sering', tag: 'Tie_Yes' },
            { label: 'Kadang', tag: 'Tie_Sometimes' },
            { label: 'Tidak', tag: 'Tie_No' },
        ],
    },

    // Step 5 (Recommendation / Lifestyle)
    {
        id: 'q13',
        title: 'Bagaimana pola makan Anda terkait nutrisi (protein/lemak sehat)?',
        description: 'Asupan nutrisi mempengaruhi kesehatan rambut.',
        options: [
            { label: 'Seimbang', tag: 'Diet_Good' },
            { label: 'Kurang protein', tag: 'Diet_LowProtein' },
            { label: 'Sering tidak teratur', tag: 'Diet_Poor' },
        ],
    },
    {
        id: 'q14',
        title: 'Apakah Anda merasa stres berkepanjangan?',
        description: 'Stres dapat memicu kerontokan rambut.',
        options: [
            { label: 'Ya, tinggi', tag: 'Stress_High' },
            { label: 'Kadang', tag: 'Stress_Mid' },
            { label: 'Tidak', tag: 'Stress_No' },
        ],
    },
    {
        id: 'q15',
        title: 'Apa tujuan perawatan Anda sekarang?',
        description: 'Memudahkan rekomendasi: pertumbuhan, perbaikan, hidrasi.',
        options: [
            { label: 'Mengurangi rontok / memperbaiki', tag: 'Goal_Growth' },
            { label: 'Memperbaiki kerusakan & bercabang', tag: 'Goal_Repair' },
            { label: 'Menambah kilau & hidrasi', tag: 'Goal_Shine' },
        ],
    },
]

// reactive selections: array length = questions.length, each entry = chosen option object (or null)
const selections = reactive(Array(questions.length).fill(null))

const currentQuestionIndex = ref(0)

const currentQuestion = computed(() => questions[currentQuestionIndex.value])

const currentStepIndex = computed(() => Math.floor(currentQuestionIndex.value / 3))

const completedSteps = computed(() => {
    const arr = []
    for (let s = 0; s < steps.length; s++) {
        const start = s * 3
        const end = start + 3
        const done = selections.slice(start, end).every(x => x !== null)
        arr.push(done)
    }
    return arr
})

const progress = computed(() => {
    const done = selections.filter(x => x !== null).length
    return (done / questions.length) * 100
})

function pad(n) {
    return String(n).padStart(2, '0')
}

function isSelected(opt) {
    return selections[currentQuestionIndex.value] === opt
}

function selectOption(opt) {
    // store the option object (shallow)
    selections[currentQuestionIndex.value] = opt
}

const hasSelection = computed(() => selections[currentQuestionIndex.value] !== null)

// function next() {
//   if (!hasSelection.value) return
//   if (currentQuestionIndex.value < questions.length - 1) {
//     currentQuestionIndex.value++
//   } else {
//     // reached end — show summary / could trigger analysis
//     // For now we'll keep at last question
//   }
// }

function prev() {
    if (currentQuestionIndex.value > 0) currentQuestionIndex.value--
}

function resetAll() {
    for (let i = 0; i < selections.length; i++) selections[i] = null
    currentQuestionIndex.value = 0
}

function next() {
    if (!hasSelection.value) return

    if (currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value++
    } else {
        // setelah selesai → arahkan ke hasil
        showResult.value = true
        finalResult.value = analyzeHair(selections)
    }
}


</script>

<style scoped>
/* small helper to hide scrollbar for mobile carousel (if any) */
@media (max-width: 640px) {
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
}

/* tweak fonts (ensure Poppins is loaded globally) */
.font-poppins {
    font-family: 'Poppins', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial;
}
</style>
