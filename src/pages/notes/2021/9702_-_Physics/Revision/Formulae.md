#### Non-uniform acceleration

##### Rotational Quantities

$$
\theta = s/r
$$

$$
\omega = \frac{\Delta\theta}{\Delta t} = v/r
$$

$$
\alpha = \frac{\Delta\omega}{\Delta t} = a/r
$$


##### Circular motion

$$
F_c = \frac{mv^2}{r} = mr\omega^2
$$

$$
a_c = \frac{v^2}{r} = r\omega^2
$$

$$
v = \omega r
$$

##### Circular motion - Banked corners

$$
\sqrt{(F_n)^2 - (F_g)^2}
$$


##### Simple harmonic motion

$$
a = -x_0 \omega^2
$$

Displacement

$$
x = x_0 cos(\omega t)
$$

Velocity

$$
x = -x_0 \omega sin(\omega t)
$$

$$
a = \pm \omega \sqrt{(x_0)^2 - x^2}
$$

Acceleration

$$
x = -x_0 \omega^2 cos(\omega t)
$$


##### Simple harmonic motion + Natural frequency

Pendulum
$$
T = 2 \pi \sqrt{\frac{l}{g}}
$$

$$
f_0 = \frac{1}{2\pi} \sqrt{\frac{g}{l}}
$$

Spring
$$
T = 2 \pi \sqrt{\frac{m}{k}}
$$

$$
f_0 = \frac{1}{2\pi} \sqrt{\frac{k}{m}}
$$

##### Energy in Simple harmonic motion

$$
E_{total} = E_p + E_k
$$

Spring:
$$
E_{total} = \frac{1}{2} k (x_0)^2
$$

For moving system:
$$
E_{total} = \frac{1}{2} m (v_0)^2
$$

$$
E_{total} = \frac{1}{2} m \omega^2 (x_0)^2
$$

At any point: 
$$
E_k = \frac{1}{2} m \omega^2((x_0)^2 - x^2)
$$


For Pendulums

$$
E_{total} = mgh_0
$$

#### Thermal Physics

##### Kelvin

$$
T(k) = \theta (\deg C) + 273.15
$$

##### Ideal gasses

$$
N = nN_a
$$

$$
\text{Number of particles} = \text{Number of moles} * \text{Avogadro's number}
$$

$$
n = \frac{m}{M}
$$

$$
\text{Number of moles} = \frac{\text{Mass}}{\text{Molar mass}}
$$

$$
\Delta W = P \Delta V
$$

##### Gas laws

Boyle's law
$$
P \propto \frac{1}{V}
$$

$$
PV = \text{Constant}
$$

Charles' law 

- $T$ : Temperature in Kelvin
$$
T \propto V
$$

$$
P \propto T
$$

$$
PV = nRT
$$

##### Mean squared speed
$$
E_k = \frac{1}{2} m <c^2> = \frac{3}{2} \frac{n}{N}RT
$$

- $K$ : Boltzmann constant
$$
E_k = \frac{3}{2} KT
$$

- $Nm$ : Total mass
$$
PV = NKT = \frac{1}{3} Nm <C^2>
$$

##### Internal Energy

$$
U = \Sigma E_k + \Sigma E_p
$$

##### Specific heat capacity
- $\Delta h$ : Heat added from/to the environment
- $\Delta Q$ : Heat added from/to the system
$$
\Delta h + \Delta Q = mc \Delta T
$$


##### Specific latent heat
$$
Q = mL
$$

#### Sensing devices and Ultrasound

##### Acoustic impedance
$$
\Zeta = \rho v
$$

##### Ratio of reflected to incident Ultrasound
- $R$ : Ratio
- $I_r$ : Intensity reflected
$$
R = \frac{I_r}{I_0} = \frac{(z_2 - z_1)^2}{(z_2 + z_1)^2}
$$

##### Attenuation of Ultrasound
$$
T_{Attenuated} = I_0 e^{-\mu x}
$$

##### Strain Gauge
$$
R = \frac{\mu L}{A}
$$

##### Potential divider
$$
V_{out} = \frac{V_{in} * R_T}{R + R_T}
$$

#### Electronics

##### Op-amps
- $A_0$ : Open-loop gain of op-amp
$$
A_0 = \frac{V_{out}}{V_{in}}
$$

$$
V_{out} = A_0(V^+ - V^-)
$$

Gain of inverting feedback loop
- $R_f$ : Resistance of inverting feedback loop 
$$
A = \frac{V_{out}}{V_{in}} = \frac{-R_f}{R}
$$

Gain of **non**-inverting feedback loop
- $R_f$ : Resistance of inverting feedback loop 
$$
A = \frac{V_{out}}{V_{in}} = 1 + \frac{-R_f}{R_1}
$$

##### Signal attenuation
$$
dB = 10 * log(\frac{P_{out}}{P_{in}})
$$

$$
dB = \text{Attenuation per unit length} * \text{Length}
$$

##### Signal to noise Ratio
$$
SNR (dB) = 10 * log(\frac{P_{Signal}}{P_{Noise}})
$$

#### Gravitational fields

##### Orbit
- $G$ : Gravitational constant: $6.67x10^{-11}$
$$
F_c \text{(Required)} = \frac{mv^2}{r} = \frac{GMm}{r^2} = F_g \text{(Provided)} 
$$

##### Newton's law of Gravitation
$$
F_g = \frac{GMm}{r^2}
$$

##### Gravitational field strength
$$
g = \frac{GM}{r^2}
$$

##### Gravitational Potential Energy
$$
E_p = \frac{-GMm}{r}
$$

##### Gravitational Potential
$$
\phi = \frac{-GM}{r}
$$

##### Escape Velocity
$$
\Delta E_p \text{(Gain)} = E_p (\infin) - E_p \text{(Surface)}
$$
since
$$
\Delta E_p \text{(Gain)} = \Delta E_k \text{(Lost)}
$$

$$
\frac{GM\xcancel{m}}{r_e} = \frac{1}{2} \xcancel{m}v^2
$$

$$
\sqrt{\frac{2GM}{r_e}} = v_{escape}
$$

##### Gravitational Potential
$$
\Phi = \frac{-GM}{r}
$$

##### Keplar's third law
$$
T^2 \propto r^3
$$

#### Electric fields

$$
F = Eq
$$

##### Coulomb's law
- $\epsilon_0 = \text{Permittivity of free space} = 8.85 * 10^{-12}$
$$
F = \frac{1}{4 \pi \epsilon_0} * \frac{Q_1 Q_2}{r^2} = \frac{K Q_1 Q_2}{r^2}
$$

##### Electric field strength
$$
E = \frac{q_1}{4 \pi \epsilon_0 r^2}
$$

##### Electric potential between two points
$$
\Delta V_{AB} = \frac{Kq_1}{\Delta r} = K q_1  (\frac{1}{r_B} - \frac{1}{r_A})
$$

##### Potential Gradient
$$
E = - \nabla V
$$

#### Capacitance
$$
C = \frac{Q_{total}}{V_{total}}
$$

$$
C \propto A \text{; } C \propto \frac{1}{d}
$$

Capacitors in Series
$$
\frac{1}{C_{total}} = \frac{1}{C_1} + \frac{1}{C_2} + ... + \frac{1}{C_n}
$$

Capacitors in Parallel
$$
C_{total} = C_1 + C_2 + ... + C_n
$$

##### Energy in Capacitors
$$
W = \frac{1}{2}QV
$$
$$
W = \frac{1}{2}CV^2
$$

##### Charged conducting isolated space
$$
V = \frac{Q}{4 \pi \epsilon R} = \frac{KQ}{R}
$$

$$
\text{Since } C = \frac{Q}{V} \text{, } C = 4 \pi \epsilon_0 R
$$

#### Magnetic fields

##### Magnetic Flux density
$$
B = \frac{F}{IL}
$$

#### Force on a current-carrying conductor inside a magnetic field
- $\theta$ : Angle between $B$ and $I$
$$
F = BIL sin(\theta)
$$

##### Force on a charged particle moving through a magnetic field
- $\theta$ : Angle between $B$ and $v$
$$
F = Bqv sin(\theta)
$$

##### Hall Effect
- $n$ : Density of charge carriers
- $t$ : Thickness of wafer
$$
V_H = \frac{IB}{nqt}
$$