export type ListTypesResumeType = {
  name: string
  suitable: {
    icon: string
    name: string
    description: string
  }
  stucture: {
    icon: string
    name: string
    list: string[]
  }
  advantages: {
    icon: string
    name: string
    description: string
  }
  disadvantages: {
    icon: string
    name: string
    description: string
  }
}

export type ListOptionTypesResume = {
  name: string
  description: string
}

export const ListTypesResume: ListTypesResumeType[] = [
  {
    name: '1️⃣ Chronological CV',
    suitable: {
      name: 'Cocok untuk',
      icon: '📌',
      description:
        'Profesional dengan pengalaman kerja yang stabil dan berkembang secara bertahap.',
    },
    stucture: {
      name: 'Struktur',
      icon: '📌',
      list: [
        'Informasi Pribadi',
        'Ringkasan Profesional',
        'Pengalaman Kerja',
        'Pendidikan',
        'Keahlian',
        'Sertifikasi dan Prestasi',
      ],
    },
    advantages: {
      name: 'Kelebihan',
      icon: '✅',
      description: 'Mudah dibaca oleh HR dan ATS-friendly.',
    },
    disadvantages: {
      name: 'Kekurangan',
      icon: '❌',
      description:
        'Tidak cocok bagi mereka yang memiliki banyak gap karier atau sering berpindah pekerjaan.',
    },
  },
  {
    name: '2️⃣ Functional CV',
    suitable: {
      name: 'Cocok untuk',
      icon: '📌',
      description:
        'Fresh graduate, freelancer, atau orang yang ingin menyoroti skill daripada pengalaman kerja.',
    },
    stucture: {
      name: 'Struktur',
      icon: '📌',
      list: [
        'Informasi Pribadi',
        'Ringkasan Profesional',
        'Keahlian Utama',
        'Pengalaman Kerja',
        'Pendidikan',
      ],
    },
    advantages: {
      name: 'Kelebihan',
      icon: '✅',
      description:
        'Menonjolkan keterampilan utama tanpa memperlihatkan gap karier atau sering pindah kerja.',
    },
    disadvantages: {
      name: 'Kekurangan',
      icon: '❌',
      description: 'HR bisa sulit memahami pengalaman kerja secara spesifik.',
    },
  },
  {
    name: '3️⃣ Combination CV',
    suitable: {
      name: 'Cocok untuk',
      icon: '📌',
      description: 'Profesional dengan skill kuat + pengalaman yang relevan.',
    },
    stucture: {
      name: 'Struktur',
      icon: '📌',
      list: [
        'Informasi Pribadi',
        'Ringkasan Profesional',
        'Keahlian Utama',
        'Pengalaman Kerja',
        'Pendidikan',
      ],
    },
    advantages: {
      name: 'Kelebihan',
      icon: '✅',
      description:
        'Fleksibel dan menonjolkan baik skill maupun pengalaman kerja.',
    },
    disadvantages: {
      name: 'Kekurangan',
      icon: '❌',
      description: 'Bisa jadi lebih panjang dari format lainnya.',
    },
  },
  {
    name: '4️⃣ Targeted CV',
    suitable: {
      name: 'Cocok untuk',
      icon: '📌',
      description:
        'Melamar pekerjaan dengan spesifikasi khusus (misalnya di bidang teknologi, desain, atau akademik).',
    },
    stucture: {
      name: 'Struktur',
      icon: '📌',
      list: [
        'Informasi Pribadi',
        'Ringkasan Profesional',
        'Pengalaman yang Relevan',
        'Skill Spesifik yang Dicari Perusahaan',
        'Pendidikan',
        'Sertifikasi',
      ],
    },
    advantages: {
      name: 'Kelebihan',
      icon: '✅',
      description:
        'Sangat efektif untuk menarik perhatian HR karena relevansi tinggi.',
    },
    disadvantages: {
      name: 'Kekurangan',
      icon: '❌',
      description:
        'Memakan waktu lebih lama untuk dibuat karena harus disesuaikan setiap kali melamar pekerjaan.',
    },
  },
  {
    name: '5️⃣ Infographic CV',
    suitable: {
      name: 'Cocok untuk',
      icon: '📌',
      description: 'Desainer, kreator konten, dan profesi di industri kreatif.',
    },
    stucture: {
      name: 'Struktur',
      icon: '📌',
      list: [
        'Tampilan Visual Menarik',
        'Informasi Pribadi',
        'Ringkasan Profesional',
        'Keahlian dalam Bentuk Grafik',
        'Pengalaman Kerja dengan Visual Timeline',
        'Portofolio',
      ],
    },
    advantages: {
      name: 'Kelebihan',
      icon: '✅',
      description: 'Sangat menonjol dan menarik di industri kreatif.',
    },
    disadvantages: {
      name: 'Kekurangan',
      icon: '❌',
      description:
        'Tidak ATS-friendly dan bisa sulit dibaca oleh sistem perekrutan otomatis.',
    },
  },
]

export const ListOptionTypes: ListOptionTypesResume[] = [
  {
    name: 'Chronological CV',
    description: 'Paling umum digunakan:',
  },
  {
    name: 'Functional CV',
    description: 'Untuk fresh graduate atau freelancer:',
  },
  {
    name: 'Combination CV',
    description: 'Untuk profesional berpengalaman:',
  },
  {
    name: 'Targeted CV',
    description: 'Untuk posisi tertentu:',
  },
  {
    name: 'Infographic CV',
    description: 'Untuk industri kreatif:',
  },
]
