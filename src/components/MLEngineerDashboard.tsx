import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronRight, BookOpen, Code, Server, Wrench, Brain, TrendingUp } from 'lucide-react';

interface RoadmapItem {
    topic: string;
    resources: string[];
    skills: string[];
}

interface RoadmapSection {
    id: string;
    title: string;
    icon: React.ElementType;
    color: string;
    estimatedTime: string;
    items: RoadmapItem[];
}

const MLEngineerDashboard = () => {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
    const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

    const roadmap: RoadmapSection[] = [
        {
            id: 'foundations',
            title: 'Foundations: Machine Learning & Deep Learning',
            icon: Brain,
            color: 'bg-blue-500',
            estimatedTime: '3-6 months',
            items: [
                {
                    topic: 'Machine Learning Fundamentals',
                    resources: [
                        'Andrew Ng\'s Machine Learning Course (Coursera)',
                        'Hands-On Machine Learning with Scikit-Learn & TensorFlow (Book)',
                        'Fast.ai Practical Deep Learning Course'
                    ],
                    skills: ['Supervised learning', 'Unsupervised learning', 'Model evaluation', 'Feature engineering']
                },
                {
                    topic: 'Deep Learning',
                    resources: [
                        'Deep Learning Specialization (Coursera)',
                        'Deep Learning with PyTorch (Book)',
                        'Stanford CS231n (CNNs) and CS224n (NLP)'
                    ],
                    skills: ['Neural networks', 'CNNs', 'RNNs/LSTMs', 'Backpropagation', 'Optimization']
                },
                {
                    topic: 'Reinforcement Learning',
                    resources: [
                        'Sutton & Barto: Reinforcement Learning (Book)',
                        'David Silver\'s RL Course (YouTube)',
                        'OpenAI Spinning Up in Deep RL'
                    ],
                    skills: ['Q-learning', 'Policy gradients', 'Actor-critic methods', 'RLHF']
                }
            ]
        },
        {
            id: 'python',
            title: 'Python & ML Frameworks',
            icon: Code,
            color: 'bg-green-500',
            estimatedTime: '2-4 months',
            items: [
                {
                    topic: 'Advanced Python',
                    resources: [
                        'Fluent Python (Book)',
                        'Python for Data Analysis (Book)',
                        'Real Python tutorials'
                    ],
                    skills: ['OOP', 'Decorators', 'Generators', 'Async programming', 'Type hints']
                },
                {
                    topic: 'PyTorch',
                    resources: [
                        'PyTorch Official Tutorials',
                        'PyTorch Lightning documentation',
                        'Build projects: image classifier, text generator'
                    ],
                    skills: ['Tensors', 'Autograd', 'Custom modules', 'DataLoaders', 'Training loops']
                },
                {
                    topic: 'TensorFlow & JAX',
                    resources: [
                        'TensorFlow Official Guide',
                        'JAX documentation and tutorials',
                        'Flax (JAX neural network library)'
                    ],
                    skills: ['TF/Keras API', 'tf.data pipelines', 'JAX transformations', 'XLA compilation']
                }
            ]
        },
        {
            id: 'infrastructure',
            title: 'Training Infrastructure & Distributed Systems',
            icon: Server,
            color: 'bg-purple-500',
            estimatedTime: '2-3 months',
            items: [
                {
                    topic: 'GPU/TPU Computing',
                    resources: [
                        'NVIDIA CUDA Programming Guide',
                        'Google Cloud TPU documentation',
                        'Mixed precision training tutorials'
                    ],
                    skills: ['CUDA basics', 'GPU memory management', 'TPU utilization', 'Mixed precision (FP16/BF16)']
                },
                {
                    topic: 'Distributed Training',
                    resources: [
                        'PyTorch Distributed tutorials',
                        'Horovod documentation',
                        'DeepSpeed and FSDP guides'
                    ],
                    skills: ['Data parallelism', 'Model parallelism', 'Pipeline parallelism', 'Gradient accumulation']
                },
                {
                    topic: 'Data Pipeline Optimization',
                    resources: [
                        'tf.data performance guide',
                        'PyTorch DataLoader best practices',
                        'Ray Data for distributed data processing'
                    ],
                    skills: ['Data prefetching', 'Parallel data loading', 'Caching strategies', 'Streaming datasets']
                }
            ]
        },
        {
            id: 'mlops',
            title: 'MLOps & Production Systems',
            icon: Wrench,
            color: 'bg-orange-500',
            estimatedTime: '2-3 months',
            items: [
                {
                    topic: 'Experiment Tracking',
                    resources: [
                        'Weights & Biases tutorials',
                        'MLflow documentation',
                        'TensorBoard guides'
                    ],
                    skills: ['Logging metrics', 'Hyperparameter tracking', 'Model versioning', 'Artifact management']
                },
                {
                    topic: 'Containerization & Orchestration',
                    resources: [
                        'Docker for Data Science',
                        'Kubernetes basics',
                        'KubeFlow documentation'
                    ],
                    skills: ['Docker containers', 'Docker Compose', 'Kubernetes pods/deployments', 'Helm charts']
                },
                {
                    topic: 'Workflow Orchestration',
                    resources: [
                        'Apache Airflow tutorials',
                        'Prefect documentation',
                        'Metaflow by Netflix'
                    ],
                    skills: ['DAG design', 'Task scheduling', 'Pipeline automation', 'Retry strategies']
                }
            ]
        },
        {
            id: 'advanced',
            title: 'Advanced: LLMs & Custom Architectures',
            icon: BookOpen,
            color: 'bg-red-500',
            estimatedTime: '3-4 months',
            items: [
                {
                    topic: 'Transformer Architecture',
                    resources: [
                        'Attention Is All You Need (Paper)',
                        'The Illustrated Transformer',
                        'Hugging Face Transformers Course'
                    ],
                    skills: ['Self-attention', 'Multi-head attention', 'Positional encoding', 'Fine-tuning']
                },
                {
                    topic: 'Large Language Models',
                    resources: [
                        'Hugging Face documentation',
                        'LLaMA, GPT papers',
                        'PEFT library (LoRA, QLoRA)'
                    ],
                    skills: ['Prompt engineering', 'Fine-tuning techniques', 'Parameter-efficient methods', 'Inference optimization']
                },
                {
                    topic: 'Diffusion Models & Vision',
                    resources: [
                        'Denoising Diffusion Probabilistic Models (Paper)',
                        'Stable Diffusion guides',
                        'CLIP and vision-language models'
                    ],
                    skills: ['Diffusion process', 'Noise scheduling', 'Conditional generation', 'Latent diffusion']
                }
            ]
        },
        {
            id: 'evaluation',
            title: 'Model Evaluation & AI Agents',
            icon: TrendingUp,
            color: 'bg-teal-500',
            estimatedTime: '2-3 months',
            items: [
                {
                    topic: 'Performance & Bias',
                    resources: [
                        'Fairness and Machine Learning (Book)',
                        'Google\'s ML Testing guide',
                        'Papers on model interpretability'
                    ],
                    skills: ['A/B testing', 'Bias detection', 'Fairness metrics', 'Explainability (SHAP, LIME)']
                },
                {
                    topic: 'Data-Driven Experimentation',
                    resources: [
                        'Designing Data-Intensive Applications',
                        'Statistical inference resources',
                        'Causal inference basics'
                    ],
                    skills: ['Experimental design', 'Statistical significance', 'Metrics selection', 'Causal analysis']
                },
                {
                    topic: 'AI Agents & Reasoning',
                    resources: [
                        'ReAct, AutoGPT papers',
                        'LangChain/LlamaIndex docs',
                        'AI agent frameworks'
                    ],
                    skills: ['Tool use', 'Chain-of-thought', 'Memory systems', 'Multi-agent collaboration']
                }
            ]
        }
    ];

    const toggleSection = (id: string) => {
        setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const toggleItem = (sectionId: string, itemIndex: number) => {
        const key = `${sectionId}-${itemIndex}`;
        setCompletedItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const getTotalProgress = () => {
        const totalItems = roadmap.reduce((sum, section) => sum + section.items.length, 0);
        const completed = Object.values(completedItems).filter(Boolean).length;
        return Math.round((completed / totalItems) * 100);
    };

    const getSectionProgress = (sectionId: string, itemsCount: number) => {
        let completed = 0;
        for (let i = 0; i < itemsCount; i++) {
            if (completedItems[`${sectionId}-${i}`]) completed++;
        }
        return Math.round((completed / itemsCount) * 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-3">ML Engineer Roadmap</h1>
                    <p className="text-slate-300 text-lg">Your path to becoming a professional ML/AI engineer</p>
                    <div className="mt-6 bg-slate-800 rounded-lg p-6 border border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-300 font-medium">Overall Progress</span>
                            <span className="text-white font-bold text-xl">{getTotalProgress()}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${getTotalProgress()}%` }}
                            />
                        </div>
                        <p className="text-slate-400 text-sm mt-3">Estimated total time: 14-23 months of dedicated learning</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {roadmap.map((section) => {
                        const Icon = section.icon;
                        const isExpanded = expandedSections[section.id];
                        const progress = getSectionProgress(section.id, section.items.length);

                        return (
                            <div key={section.id} className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                                <button
                                    onClick={() => toggleSection(section.id)}
                                    className="w-full p-5 flex items-center gap-4 hover:bg-slate-750 transition-colors"
                                >
                                    <div className={`${section.color} p-3 rounded-lg`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h2 className="text-xl font-bold text-white">{section.title}</h2>
                                        <div className="flex items-center gap-4 mt-2">
                                            <span className="text-slate-400 text-sm">{section.estimatedTime}</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 bg-slate-700 rounded-full h-2">
                                                    <div
                                                        className={`${section.color} h-2 rounded-full transition-all duration-500`}
                                                        style={{ width: `${progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-slate-300 text-sm font-medium">{progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    {isExpanded ?
                                        <ChevronDown className="w-5 h-5 text-slate-400" /> :
                                        <ChevronRight className="w-5 h-5 text-slate-400" />
                                    }
                                </button>

                                {isExpanded && (
                                    <div className="p-5 pt-0 space-y-4">
                                        {section.items.map((item, idx) => {
                                            const itemKey = `${section.id}-${idx}`;
                                            const isCompleted = completedItems[itemKey];

                                            return (
                                                <div key={idx} className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                                                    <div className="flex items-start gap-3">
                                                        <button
                                                            onClick={() => toggleItem(section.id, idx)}
                                                            className="mt-1 flex-shrink-0"
                                                        >
                                                            {isCompleted ?
                                                                <CheckCircle2 className="w-6 h-6 text-green-500" /> :
                                                                <Circle className="w-6 h-6 text-slate-500 hover:text-slate-400" />
                                                            }
                                                        </button>
                                                        <div className="flex-1">
                                                            <h3 className={`font-semibold text-lg ${isCompleted ? 'text-slate-400 line-through' : 'text-white'}`}>
                                                                {item.topic}
                                                            </h3>

                                                            <div className="mt-3">
                                                                <p className="text-slate-400 text-sm font-medium mb-2">Resources:</p>
                                                                <ul className="space-y-1">
                                                                    {item.resources.map((resource, i) => (
                                                                        <li key={i} className="text-slate-300 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0">
                                                                            {resource}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            <div className="mt-3">
                                                                <p className="text-slate-400 text-sm font-medium mb-2">Key Skills:</p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {item.skills.map((skill, i) => (
                                                                        <span key={i} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700">
                                                                            {skill}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
                    <h3 className="text-xl font-bold text-white mb-4">Pro Tips for Success</h3>
                    <ul className="space-y-3 text-slate-300">
                        <li className="flex gap-3">
                            <span className="text-blue-400 font-bold">1.</span>
                            <span><strong>Build projects</strong> alongside learning theory. Implement papers, contribute to open source, create a portfolio on GitHub.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-400 font-bold">2.</span>
                            <span><strong>Stay current</strong> by reading papers on arXiv, following ML researchers on Twitter/X, and joining communities like r/MachineLearning.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-400 font-bold">3.</span>
                            <span><strong>Practice interview skills</strong> with LeetCode, system design problems, and ML-specific questions (model selection, debugging, scaling).</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-400 font-bold">4.</span>
                            <span><strong>Network</strong> through conferences (NeurIPS, ICML), local meetups, and online communities. Many jobs come through referrals.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-400 font-bold">5.</span>
                            <span><strong>Focus on fundamentals first</strong>, then specialize based on interest and job market demand (LLMs, computer vision, RL, etc.).</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-purple-500/30">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <Code className="w-7 h-7 text-purple-400" />
                        Portfolio Projects to Stand Out
                    </h3>
                    <p className="text-slate-400 mb-6">Build these projects to demonstrate mastery of the job requirements</p>

                    <div className="space-y-6">
                        {/* Beginner Level */}
                        <div>
                            <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                                <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm">Beginner</span>
                                Foundation Projects
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">1. Custom Neural Network Library</h5>
                                    <p className="text-slate-300 text-sm mb-2">Build a mini-PyTorch from scratch with autograd, optimizers, and basic layers.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">Python</span>
                                        <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">NumPy</span>
                                        <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">Backprop</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">2. Image Classification Pipeline</h5>
                                    <p className="text-slate-300 text-sm mb-2">End-to-end pipeline with data augmentation, training, evaluation, and deployment via API.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">PyTorch</span>
                                        <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">FastAPI</span>
                                        <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">Docker</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Intermediate Level */}
                        <div>
                            <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                                <span className="bg-yellow-500/20 px-3 py-1 rounded-full text-sm">Intermediate</span>
                                Production-Ready Systems
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">3. Distributed Training Framework</h5>
                                    <p className="text-slate-300 text-sm mb-2">Train ResNet/ViT on ImageNet using multi-GPU DDP with mixed precision and gradient accumulation.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">PyTorch DDP</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">Wandb</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">SLURM</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">4. MLOps Pipeline with Monitoring</h5>
                                    <p className="text-slate-300 text-sm mb-2">Complete ML pipeline with Airflow orchestration, model registry, A/B testing, and drift detection.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">Airflow</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">MLflow</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">Kubernetes</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">5. LLM Fine-tuning Platform</h5>
                                    <p className="text-slate-300 text-sm mb-2">Fine-tune LLaMA/Mistral with LoRA/QLoRA on custom datasets. Include evaluation suite and inference optimization.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">HuggingFace</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">PEFT</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">vLLM</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">6. Custom Transformer Architecture</h5>
                                    <p className="text-slate-300 text-sm mb-2">Implement a novel transformer variant (efficient attention, mixture-of-experts, etc.) and benchmark it.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">PyTorch</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">Flash Attention</span>
                                        <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-xs">Benchmarking</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Advanced Level */}
                        <div>
                            <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                                <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm">Advanced</span>
                                Research & Innovation Projects
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">7. AI Agent Framework</h5>
                                    <p className="text-slate-300 text-sm mb-2">Build autonomous agents that use tools, reason step-by-step, and collaborate (ReAct, AutoGPT-style).</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">LangChain</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Function Calling</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Vector DBs</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">8. RLHF Training Pipeline</h5>
                                    <p className="text-slate-300 text-sm mb-2">Implement full RLHF stack: SFT, reward modeling, PPO training for aligning LLMs with human preferences.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">TRL</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">PPO</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">DeepSpeed</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">9. Multimodal Model (Vision + Language)</h5>
                                    <p className="text-slate-300 text-sm mb-2">Train a CLIP-like or LLaVA-style model for image-text understanding with contrastive learning.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Vision Transformers</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Contrastive Learning</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Multi-GPU</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">10. Paper Implementation + Improvements</h5>
                                    <p className="text-slate-300 text-sm mb-2">Reproduce a recent paper (e.g., Mamba, Mixture-of-Depths) and propose/test your own improvements.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Research</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Ablation Studies</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Benchmarking</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">11. Latent Diffusion Model</h5>
                                    <p className="text-slate-300 text-sm mb-2">Build and train a diffusion model for image generation with conditioning, ControlNet-style guidance.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Diffusers</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">VAE</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Sampling</span>
                                    </div>
                                </div>

                                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                                    <h5 className="font-semibold text-white mb-2">12. Model Bias Analysis Tool</h5>
                                    <p className="text-slate-300 text-sm mb-2">Create comprehensive toolkit for detecting and measuring bias in ML models across demographics.</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Fairness Metrics</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">SHAP</span>
                                        <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Interpretability</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-950/50 p-5 rounded-lg border border-blue-500/30 mt-6">
                            <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" />
                                Portfolio Strategy
                            </h4>
                            <div className="text-slate-300 text-sm space-y-2">
                                <p><strong className="text-white">✓ Aim for 4-6 projects:</strong> Mix of beginner (1-2), intermediate (2-3), and advanced (1-2) projects.</p>
                                <p><strong className="text-white">✓ Quality over quantity:</strong> One polished, well-documented project beats three half-finished ones.</p>
                                <p><strong className="text-white">✓ Document everything:</strong> Write detailed READMEs with architecture diagrams, results, lessons learned, and future improvements.</p>
                                <p><strong className="text-white">✓ Show end-to-end thinking:</strong> Include data preprocessing, training, evaluation, deployment, and monitoring aspects.</p>
                                <p><strong className="text-white">✓ Demonstrate impact:</strong> Use metrics, benchmarks, and comparisons to show your work's effectiveness.</p>
                                <p><strong className="text-white">✓ Open source contributions:</strong> Contributing to popular libraries (PyTorch, HuggingFace, etc.) carries significant weight.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MLEngineerDashboard;
