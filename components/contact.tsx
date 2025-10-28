"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Integração com serviço de email
    const mailtoLink = `mailto:eronf5594@gmail.com?subject=Contato de ${formData.name}&body=${formData.message}%0D%0A%0D%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">
            Vamos Colaborar!
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Disponível para oportunidades como <strong>Desenvolvedor Java Júnior/Pleno</strong>. 
            Entre em contato para conversarmos sobre seu próximo projeto.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-cyan-800 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Email</p>
                      <a 
                        href="mailto:eronf5594@gmail.com"
                        className="text-slate-600 hover:text-cyan-800 transition-colors"
                      >
                        eronf5594@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-cyan-800 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Telefone/WhatsApp</p>
                      <a 
                        href="https://wa.me/5591984464655"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-cyan-800 transition-colors"
                      >
                        (91) 98446-4655
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-cyan-800 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">Localização</p>
                      <p className="text-slate-600">Belém, Pará, Brasil</p>
                      <p className="text-xs text-slate-500 mt-1">Disponível para trabalho remoto</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links rápidos */}
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Links Úteis</h4>
                <div className="flex flex-col gap-2">
                  <a 
                    href="https://github.com/eronfelix-js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-cyan-800 transition-colors flex items-center gap-2"
                  >
                    → GitHub (eronfelix-js)
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/eron-felix-debarros/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-cyan-800 transition-colors flex items-center gap-2"
                  >
                    → LinkedIn (eron-felix-debarros)
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua Mensagem (conte sobre a oportunidade, stack, etc)"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-cyan-800 hover:bg-cyan-900 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}