import type { Metadata } from 'next';
import { GuideTemplate, type GuideContent } from '@/components/guide/guide-template';

export const metadataEn: Metadata = {
  title: 'Sora2 Prompt Advanced Guide | Cinematic AI Video Prompts & Subtitle Workflow',
  description:
    'Master Sora2 prompt engineering with 15 optimisation tips, 10 ready-to-use templates, and automation tactics for subtitles, localisation, and delivery.',
  keywords: [
    'Sora2 prompt guide',
    'Sora2 prompts',
    'Sora2 AI video generator',
    'AI video prompt tips',
    'Sora2 subtitle workflow',
    'Sora2 localisation',
    'Sora video best practices'
  ]
};

const navItems = [
  { id: 'principles', label: 'Prompt fundamentals' },
  { id: 'tips', label: '15 optimisation tips' },
  { id: 'templates', label: '10 scenario templates' },
  { id: 'workflow', label: '4-step iteration loop' },
  { id: 'pitfalls', label: 'Common mistakes' },
  { id: 'cases', label: 'Practical case studies' }
];

const content: GuideContent = {
  navItems,
  navGroups: [
    {
      title: 'Playbook',
      items: navItems
    }
  ],
  hero: {
    breadcrumb: 'Guide',
    title: 'Sora2 Prompt Advanced Guide',
    subtitle:
      'Adapted from “Sora 2 Prompt Advanced Guide: 15 Optimisation Techniques & 10 Scenario Templates”. Use it as your SEO-ready playbook for consistent, cinematic Sora2 prompts and subtitle workflows.'
  },
  latest: {
    badge: 'Latest',
    title: 'Launch multilingual subtitle packs in minutes',
    description: 'Learn how teams pair advanced prompts with Sora2 subtitle automation to publish across every channel.',
    linkLabel: 'View the case study ↗',
    href: '/en/blog/case-study'
  },
  sections: [
    {
      id: 'principles',
      title: 'Prompt fundamentals',
      callout:
        'Use this Sora2 prompt guide to align camera language, storytelling beats, and subtitle automation so every AI video export is ready for localisation.',
      paragraphs: [
        'Five principles anchor a stable Sora2 prompt: clarity, structure, chronological order, correct camera grammar, and alignment with the desired outcome.',
        'Use the recommended structure: camera type → subject detail → action beats → environment → lighting mood → technical parameters. This keeps Sora2\'s AI video generator consistent and makes subtitle timestamps easier to review.'
      ],
      bullets: [
        'Camera type: close-up, medium, wide, low angle, drone, etc.',
        'Subject detail: age, ethnicity, skin tone, hairstyle, wardrobe, body posture.',
        'Action beats: describe start → middle → end, using connective language.',
        'Environment: outline foreground / midground / background layers explicitly.',
        'Lighting mood: specify hour, direction, colour temperature, neon/holographic sources.',
        'Technical parameters: frame rate, motion speed, depth of field, LUT, focal length.'
      ]
    },
    {
      id: 'tips',
      title: '15 optimisation tips',
      paragraphs: ['Grouped into beginner (1-5), intermediate (6-10), and advanced (11-15) so teams can layer detail progressively.'],
      subSections: [
        {
          title: '🟢 Beginner 1-5 · lock the subject',
          paragraphs: ['Ensure every render recreates the same character or object.'],
          bullets: [
            'Tip1 · Age & physique: state an age range and body type to avoid generic defaults.',
            'Tip2 · Ethnicity & skin tone: write “East Asian complexion”, “deep brown skin” etc. for diversity.',
            'Tip3 · Hair: length, texture, colour, styling details.',
            'Tip4 · Wardrobe: include fabric, cut, hero colour, accent colour (e.g. “emerald silk suit”).',
            'Tip5 · Pose & demeanor: describe stance, facial expression, eye direction, emotional tone.'
          ]
        },
        {
          title: '🟡 Intermediate 6-10 · choreograph motion & space',
          paragraphs: ['Move from static portraits to convincing shots.'],
          bullets: [
            'Tip6 · Action sequencing: write steps using “initially / then / finally” or equivalent connectors.',
            'Tip7 · Three-layer depth: call out what sits in foreground, midground, and background.',
            'Tip8 · Camera movement: specify push-ins, orbits, crane ups, lateral tracking, etc.',
            'Tip9 · Focus & depth: request rack/follow focus or shallow/deep depth explicitly.',
            'Tip10 · Sensory cues: mention ambient sounds or visual hints (steam, rain, dust) to shape mood.'
          ]
        },
        {
          title: '🔴 Advanced 11-15 · cinematic storytelling',
          paragraphs: ['Use filmmaker vocabulary to drive emotion and polish.'],
          bullets: [
            'Tip11 · Focus control: instruct rack focus or follow focus transitions.',
            'Tip12 · Depth of field: note shallow bokeh, deep focus, or background defocus requirements.',
            'Tip13 · Compound camera moves: combine verbs like “slow push in while orbiting clockwise”, “crane up while tilting down”.',
            'Tip14 · Mood & symbolism: add emotional tone, symbolic props, contrast, visual metaphors.',
            'Tip15 · Visual texture: describe particle effects, lighting shifts, colour gradients that support the story arc.'
          ]
        }
      ]
    },
    {
      id: 'templates',
      title: '10 scenario templates',
      paragraphs: [
        'Copy-ready blueprints covering character portraits, product hero shots, city nightscapes, wildlife, sci-fi, and abstract art. Use them as starting points, then customise values to match Sora2 brand campaigns and subtitle localisation goals.'
      ],
      bullets: [
        'Portrait close-up · key/fill/rim lighting, bokeh, expression cues.',
        'Product showcase · rotating tabletop, three-point lighting, reflective surfaces.',
        'Aerial landscape · altitude, compass direction, landmark callouts.',
        'Action sports · slow-motion percentage, path, velocity.',
        'Interior walkthrough · camera route, colour temperature, material texture.',
        'Food macro · steam/heat particles, crispy texture language, macro focus.',
        'City nightscape · neon, light trails, holographic signage, rain reflections.',
        'Nature documentary · location coordinates, species behaviour, long-take resilience.',
        'Sci-fi future · cyberpunk elements, UI projections, saturated complementary colours.',
        'Abstract art · fluid/particle behaviour, colour transitions, tempo modulation.'
      ]
    },
    {
      id: 'workflow',
      title: '4-step iteration loop',
      paragraphs: ['Follow the loop from draft to broadcast-ready output so Sora2 prompts, subtitles, and distribution assets stay aligned.'],
      bullets: [
        'Step1 · Baseline: confirm camera, subject, action, environment, and lighting are covered.',
        'Step2 · Detail: plug gaps in wardrobe, materials, motion pace, emotional intent.',
        'Step3 · Control: define camera moves, focus, depth, frame rate, and any compound paths.',
        'Step4 · Story: layer mood keywords, symbolism, time-of-day transitions, and finishing effects.'
      ]
    },
    {
      id: 'pitfalls',
      title: 'Common mistakes & how to fix them',
      paragraphs: ['The guide highlights recurrent issues and actionable fixes so your Sora2 prompt strategy stays scalable across AI video campaigns.'],
      bullets: [
        'Vague adjectives → swap for measurable descriptions (lens, focal length, hue).',
        'Missing action beats → add start / during / end steps with verbs.',
        'Lighting omissions → state light source, direction, intensity, fill/rim usage.',
        'Terminology drift → maintain a glossary so translations stay consistent.'
      ]
    },
    {
      id: 'cases',
      title: 'Practical case studies',
      paragraphs: ['Five annotated examples show how each iteration adds clarity.'],
      subSections: [
        {
          title: 'Case 1 · Commercial portrait',
          bullets: [
            'Provide concrete numbers (35 years old, 50mm lens at f/2.0).',
            'Add lighting calls (rim light, soft fill, slightly low angle push-in).',
            'Spell out emotional tone: “professional yet approachable”.'
          ]
        },
        {
          title: 'Case 2 · Food documentary',
          bullets: [
            'Describe surfaces (marble counter, golden sear, pink glaze).',
            'List action sequence “place → contact → sear → press gently”.',
            'Shallow DoF, 70% slow motion, steam particles as visualised sizzling sound.'
          ]
        },
        {
          title: 'Case 3 · Cyberpunk city',
          bullets: [
            'Reference Blade Runner aesthetics, specify neon palettes.',
            'Include holograms, light trails, rain reflecting signage.',
            'Combine push-in + slight lift, use 24mm wide-angle low angle.'
          ]
        },
        {
          title: 'Case 4 · Wildlife documentary',
          bullets: [
            'Pin exact location (Amboseli, Mount Kilimanjaro).',
            'Differentiate subjects (adult female + three calves of varying ages).',
            'Side tracking at herd speed, golden hour rim light, 70-200mm lens at 135mm.'
          ]
        },
        {
          title: 'Case 5 · Abstract art experiment',
          bullets: [
            'Liquid metal morphing sphere → spikes → waves → sphere in an 8-second loop.',
            'Colour gradient blue → purple → orange over a black background.',
            'Gold particle orbits, 50% slow motion, 8K macro lens for hypnotic rhythm.'
          ]
        }
      ]
    }
  ],
  quickLinks: {
    title: 'On this page',
    items: [
      { id: 'principles', label: 'Fundamentals' },
      { id: 'tips', label: 'Optimisation tips' },
      { id: 'templates', label: 'Scenario templates' },
      { id: 'workflow', label: 'Iteration loop' },
      { id: 'pitfalls', label: 'Mistakes' },
      { id: 'cases', label: 'Case studies' }
    ]
  },
  newsletter: {
    title: 'Stay in the loop',
    description: 'Workflow recipes, automation patterns, and new templates will drop soon (newsletter in preview).',
    placeholder: 'email (coming soon)',
    ctaLabel: 'Coming soon'
  },
  resources: {
    title: 'Resources',
    items: [
      { label: 'Subtitle studio', href: '/en/subtitles' },
      { label: 'Original Chinese article', href: 'https://help.apiyi.com/sora-2-prompt-advanced-guide.html' },
      { label: 'Browse all posts', href: '/en/blog' }
    ]
  }
};

export default function GuideEn() {
  return <GuideTemplate content={content} />;
}
